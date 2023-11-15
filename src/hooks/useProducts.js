import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../firebase/firebase"

const useProducts = () => {

        const [products, setProducts] = useState([])
        const [loading, setLoading] = useState(false)
        const [details, setDetails] = useState(null)
        const [selectedIndexes, setSelectedIndexes] = useState([]);
        const [categories, setCategories] = useState([])
        const [search, setSearch] = useState('')

        const onChangeSearch = (text) => {
                setSearch(text);
        }

        const searchProducts = () => {
                setSelectedIndexes([])
                getProducts()
        }

        const getProducts = () => {
                setLoading(true)
                const productsCollection = collection(db, "products")
                getDocs(productsCollection)
                        .then((querySnapshot) => {
                                const productsList = querySnapshot.docs.map((doc) => ({
                                        id: doc.id,
                                        image: doc.data().image,
                                        title: doc.data().title,
                                        price: doc.data().price,
                                        category: doc.data().category,
                                        categoryId: categories.indexOf(doc.data().category),
                                }))
                                if(search !== ""){
                                        let newProducts = productsList.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
                                        setProducts(newProducts);
                                        return;
                                }
                                setProducts(productsList)
                        })
                        .catch((error) => {
                                console.log("Error getting documents: ", error);
                        })
                        .finally(() => {
                                setLoading(false)
                        })
        }

        const getAllCategories = () => {
                const categoriesCollection = collection(db, "categorias")
                getDocs(categoriesCollection)
                        .then((querySnapshot) => {
                                const categoriesList = querySnapshot.docs.map((doc) => (doc.id))
                                setCategories(categoriesList)
                        })
                        .catch((error) => {
                                console.log("Error getting documents: ", error);
                        })
        }


        const getProductDetails = (id) => {

                const docRef = doc(db, "products", id);
                getDoc(docRef)
                        .then((querySnapshot) => {
                                if (querySnapshot.exists()) {
                                        setDetails(querySnapshot.data())
                                }
                        })
                        .catch((error) => {
                                console.log("Error getting documents: ", error);
                        });
        }

        useEffect(() => {
                getAllCategories()
        }, [])

        const filterProducts = () => {
                setSearch('')
                const newProducts = products.filter((product) => selectedIndexes.includes(product.categoryId))
                setProducts(newProducts)
        }

        useEffect(() => {
                if (search == '' && selectedIndexes.length == 0) return getProducts()
                if (search !== "") return;
                filterProducts()

        }, [selectedIndexes])

        return {
                products,
                getProductDetails,
                details,
                categories,
                selectedIndexes,
                setSelectedIndexes,
                searchProducts,
                search,
                setSearch,
                filterProducts,
                onChangeSearch,
                loading
        }
}

export default useProducts
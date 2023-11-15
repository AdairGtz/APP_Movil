import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/shoppingCartReducer";
import { actionCart } from "../utils/typesShoppingCart";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, increment, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const GlobalContext = createContext();


const initalToast = {
        visible: false,
        title: '',
        subtitle: '',
        type: 'success',
        timeOut: 3000,
        style: {}
}

const GlobalProvider = ({ children }) => {

        const initialShoppingCart = {
                cart: [],
                quantityProducts: 0,
                subtotal: 0
        }

        const products = []
        const [session, setSession] = useState(null)
        const [state, dispatch] = useReducer(cartReducer, initialShoppingCart)
        const [toast, setToast] = useState(initalToast)

        const addToCart = (product) => {

                product.quantity = 1

                if (session === null) {
                        setToast({
                                visible: true,
                                title: 'Error',
                                subtitle: 'inicia sesion para  agregar productos al carrito',
                                type: 'error',
                                timeOut: 3000,
                                style: { backgroundColor: '#E53E3E' }
                        })
                        return;
                }

                const tmp = {
                        idproduct: product.id,
                        iduser: session.uid,
                        quantity: product.quantity,
                        name: product.title,
                        price: product.price,
                        image: product.image,
                }

                //verificar si existe el producto en el carrito para este usuario
                let q = query(collection(db, "tmpcart"), where("idproduct", "==", product.id), where("iduser", "==", session.uid));
                getDocs(q).then((querySnapshot) => {

                        if (querySnapshot.empty) {

                                addDoc(collection(db, "tmpcart"), tmp)
                                        .then((docRef) => {
                                                tmp.id = docRef.id
                                                dispatch({
                                                        type: actionCart.addToCart,
                                                        payload: tmp
                                                })
                                        })
                                return;
                        } else {
                                updateDoc(doc(db, "tmpcart", querySnapshot.docs[0].id), {
                                        quantity: querySnapshot.docs[0].data().quantity + 1
                                }).then(() => {
                                        tmp.id = querySnapshot.docs[0].id
                                        dispatch({
                                                type: actionCart.addToCart,
                                                payload: tmp
                                        })
                                })
                        }
                })
        }

        const deleteOneProductToCart = (id) => {

                deleteDoc(doc(db, "tmpcart", id))
                dispatch({
                        type: actionCart.deleteOneProductToCart,
                        payload: { id }
                })
        }

        const getDbCart = () => {
                let q = query(collection(db, "tmpcart"), where("iduser", "==", session.uid));
                getDocs(q).then((querySnapshot) => {
                        const tmp = []
                        querySnapshot.forEach((doc) => {
                                tmp.push({ id: doc.id, ...doc.data() })
                        })

                        dispatch({
                                type: actionCart.inititalCart,
                                payload: {
                                        cart: tmp,
                                        quantityProducts: tmp.reduce((a, b) => a + (b.quantity), 0),
                                        subtotal: tmp.reduce((a, b) => a + (b.price * b.quantity), 0)
                                }
                        })
                })
        }

        useEffect(() => {
                if (session !== null) {
                        getDbCart()
                }
        }, [session])

        const decreaseQuantityProduct = (id) => {

                updateDoc(doc(db, "tmpcart", id), {
                        quantity: increment(-1)
                })
                dispatch({
                        type: actionCart.decreaseQuantity,
                        payload: { id }
                })
        }

        const increaseQuantityProduct = (id) => {
                updateDoc(doc(db, "tmpcart", id), {
                        quantity: increment(+1)
                })
                dispatch({
                        type: actionCart.increaseQuantity,
                        payload: { id }
                })
        }

        const getUser = () => {
                AsyncStorage.getItem('user').then((user) => {
                        if (user !== null) {
                                setSession(JSON.parse(user))
                        }
                })
        }

        useEffect(() => {
                getUser()
        }, [])

        useEffect(() => {
                setTimeout(() => {
                        setToast(initalToast)
                }, toast.timeOut)
        }, [toast.visible === true])


        const data = {
                products,
                session,
                setSession,
                addToCart,
                state,
                deleteOneProductToCart,
                decreaseQuantityProduct,
                increaseQuantityProduct,
                toast,
                setToast
        }



        return (
                <GlobalContext.Provider value={data}>
                        {children}
                </GlobalContext.Provider>
        )
}

export { GlobalContext, GlobalProvider }
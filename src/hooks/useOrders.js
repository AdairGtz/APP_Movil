import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/globalContext"
import { addDoc, collection, getDocs, increment, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { useNavigation } from "@react-navigation/native"

const useOrders = () => {

        const navigation = useNavigation()
        const { state, setToast, deleteOneProductToCart, session } = useContext(GlobalContext)
        const [myOrders, setMyOrders] = useState([])
        const [loading, setLoading] = useState(false)

        const getDateTime = (dateTime) => {
                const date = dateTime.toDate();

                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
                const dateString = date.toLocaleDateString('es-ES', options);

                return dateString;
        }

        const getMyOrder = () => {
                setLoading(true)
                let q = query(collection(db, "orders"), where("uidUser", "==", session.uid))
                getDocs(q)
                        .then(response => {
                                let orders = []
                                response.forEach(doc => {
                                        orders.push({ id: doc.id, ...doc.data(), creationdate: getDateTime(doc.data().creationdate), deliverydate: getDateTime(doc.data().deliverydate) })
                                })

                                setMyOrders(orders)

                        })
                        .catch(error => {
                                console.log(error)
                        })
                        .finally(() => {
                                setLoading(false)
                        })
        }

        const generateOrder = (address, payment) => {
                if (!payment) {
                        setToast({ visible: true, title: 'Pagos', subtitle: 'Selecciona un metodo de pago', timeOut: 3000, type: 'error' })
                }

                //por si se desea agreagar un descuento a la compra
                let subtotal = state.subtotal - (state?.discount ?? 0)

                let quantityproduct = state.quantityProducts
                addDoc(collection(db, "orders"), {
                        ...address,
                        orderdetails: state.cart,
                        paymentmethod: payment,
                        total: subtotal,
                        quantityproduct,
                        shippingcost: 0,
                        creationdate: new Date(), statusorder: 'Pendiente',
                        deliverydate: new Date(new Date().getTime() + (48 * 60 * 60 * 1000))
                })
                        .then((docRef) => {

                                //eliminar los productos del carrito
                                state.cart.map(item => {
                                        deleteOneProductToCart(item.id)
                                })
                                getMyOrder()
                                navigation.navigate('myorders')
                        })
                        .catch((error) => {
                                console.error("Error adding document: ", error);
                        })
                        .finally(() => {
                                console.log("la transaccion se realizo correctamente")
                        })

        }


        return {
                generateOrder,
                myOrders,
                getMyOrder
        }
}

export default useOrders
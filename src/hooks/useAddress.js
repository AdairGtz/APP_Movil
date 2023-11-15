import { useCallback, useContext, useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { GlobalContext } from '../context/globalContext'
import { ToastAndroid } from 'react-native'

const initialFormAddress = {
        name: '',
        street: '',
        numberStreet: '',
        reference: '',
        city: '',
        state: '',
        code: '',
        colony: '',
        isEditing: false
}

const initialLoading = {
        address: false,
        listCode: true,
        getCode: false,
        loaderSave: false,
        loaderDelete: {
                id: '',
                loader: false,
        }
}
const useAddress = () => {

        const { session, setToast } = useContext(GlobalContext)
        const [listAddresses, setListAddresses] = useState([])
        const [listCode, setListCode] = useState([])
        const [activeModal, setActiveModal] = useState(false)
        const [formAddress, setFormAddress] = useState(initialFormAddress)
        const [loading, setLoading] = useState(initialLoading)

        const activeEdit = (address) => {
                setFormAddress({ ...address, isEditing: true })
                setActiveModal(true)
        }
        const handleChangeText = (value, name) => {
                setFormAddress({ ...formAddress, [name]: value })
        }

        const exitModal = () => {
                setActiveModal(false)
                setFormAddress(initialFormAddress)
                setListCode([])
                setLoading(initialLoading)
        }

        const getAllCodes = () => {
                //obtener los codigos postales
                if (formAddress.code.length == 5) {
                        setLoading(prev => ({ ...prev, getCode: true }))
                        fetch('https://raw.githubusercontent.com/pulgueta/mxzip/main/mxzip.json')
                                .then(response => response.json())
                                .then(data => {
                                        const getData = data[formAddress.code]
                                        if (getData == undefined) {
                                                setFormAddress(prev => ({ ...prev, state: '', city: '', colony: '' }))
                                                return;
                                        }
                                        let neighborhoods = getData.neighborhoods.map(item => ({ value: item }))
                                        setFormAddress(prev => ({ ...prev, state: getData.state, city: getData.municipality }))
                                        setListCode(neighborhoods)
                                })
                                .catch(error => console.log(error))
                                .finally(() => {
                                        setLoading(prev => ({ ...prev, getCode: false }))
                                })

                        return;
                }

                setFormAddress(prev => ({ ...prev, state: '', city: '', colony: '' }))
        }

        const toastNative = (text) => {
                ToastAndroid.showWithGravity(
                        text,
                        ToastAndroid.LONG,
                        ToastAndroid.TOP
                )
        }

        const addAdress = () => {
                if (formAddress.name.trim() === '') {
                        toastNative('El nombre es requerido')
                        return;
                }
                if (formAddress.street.trim() === '') {
                        toastNative('La calle es requerida')
                        return;
                }
                if (formAddress.numberStreet.trim() === '') {
                        toastNative('El numero es requerido')
                        return;
                }
                if (formAddress.city.trim() === '') {
                        toastNative('La ciudad es requerida')
                        return;
                }
                if (formAddress.state.trim() === '') {
                        toastNative('El estado es requerido')
                        return;
                }
                if (formAddress.code.trim() === '') {
                        toastNative('El codigo postal es requerido')
                        return;
                }
                if (formAddress.colony.trim() === '') {
                        toastNative('La colonia es requerida')
                        return;
                }

                setLoading(prev => ({ ...prev, loaderSave: true }));


                let isEditing = formAddress.isEditing;
                delete formAddress.isEditing;

                if (isEditing && formAddress.id) {
                        // Actualizar documento existente
                        const { id, ...data } = formAddress;
                        updateDoc(doc(db, 'directions', id), data)
                                .then(() => {
                                        setListAddresses(prev => {
                                                const index = prev.findIndex(address => address.id === id);
                                                const updatedAddress = { ...prev[index], ...data };
                                                prev.splice(index, 1, updatedAddress);
                                                return [...prev];
                                        });
                                        setToast({
                                                visible: true,
                                                timeOut: 3000,
                                                title: 'Actualizar dirección',
                                                subtitle: 'Dirección actualizada correctamente',
                                                type: 'success',
                                        });
                                })
                                .catch(error => {
                                        console.log(error);
                                        setFormAddress(prev => ({ ...prev, neighborhoods: array }));
                                })
                                .finally(() => {
                                        setFormAddress(initialFormAddress);
                                        setActiveModal(false);
                                        setLoading(prev => ({ ...prev, loaderSave: false }));
                                });
                } else {
                        // Agregar nuevo documento
                        addDoc(collection(db, 'directions'), { ...formAddress, uidUser: session.uid })
                                .then(response => {
                                        setListAddresses(prev => ([...prev, { ...formAddress, uidUser: session.uid, id: response.id }]));
                                        setToast({
                                                visible: true,
                                                timeOut: 3000,
                                                title: 'Nueva dirección',
                                                subtitle: 'Dirección agregada correctamente',
                                                type: 'success',
                                        });
                                })
                                .catch(error => {
                                        console.log(error);
                                        setFormAddress(prev => ({ ...prev, neighborhoods: array }));
                                })
                                .finally(() => {
                                        setFormAddress(initialFormAddress);
                                        setActiveModal(false);
                                        setLoading(prev => ({ ...prev, loaderSave: false }));
                                });
                }
        };

        //funcion para eliminar una direccion
        const deleteAddress = (id) => {
                setLoading(prev => ({ ...prev, loaderDelete: { id: id, loader: true } }))
                deleteDoc(doc(db, "directions", id))
                        .then(response => {
                                setListAddresses(prev => prev.filter(item => item.id != id))
                                setToast({
                                        timeOut: 3000,
                                        visible: true,
                                        title: 'Eliminar direccion',
                                        subtitle: 'Direccion eliminada correctamente',
                                        type: 'success',
                                })
                        })
                        .catch(error => {
                                console.log(error)
                                setToast({
                                        timeOut: 3000,
                                        visible: true,
                                        title: 'Eliminar direccion',
                                        subtitle: 'Ocurrio un error al eliminar la direccion',
                                        type: 'error',
                                })
                                return;
                        }).finally(() => {
                                setLoading(prev => ({ ...prev, loaderDelete: { id: '', loader: false } }))
                        })
        }

        //funcion para buscar las direcciiones del usuario
        const getAddresses = useCallback(() => {
                setLoading(prev => ({ ...prev, address: true }))
                let q = query(collection(db, "directions"), where("uidUser", "==", session.uid))
                getDocs(q)
                        .then((querySnapshot) => {
                                let tmpAddresses = []
                                querySnapshot.forEach((doc) => {
                                        tmpAddresses.push({ ...doc.data(), id: doc.id })
                                });
                                setListAddresses(tmpAddresses);
                        }).catch((error) => {
                                console.log("ocurrio un error", error)
                                setListAddresses([])
                        }).finally(() => {
                                setLoading(prev => ({ ...prev, address: false }))
                        })
        }, [])


        useEffect(() => {
                getAllCodes()
        }, [formAddress.code])

        useEffect(() => {
                getAddresses()
        }, [])

        return {
                loading,
                listAddresses,
                activeModal,
                setActiveModal,
                handleChangeText,
                formAddress,
                addAdress,
                session,
                deleteAddress,
                listCode,
                activeEdit,
                exitModal
        }
}

export default useAddress
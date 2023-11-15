import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/globalContext"
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { ToastAndroid } from "react-native"

const inititalFormUser = {
        name: '',
        fatherSurname: '',
        motherSurname: '',
        birthday: '',
        age: '',
        profilePicture: '',
}


const useUser = () => {

        const { session: { uid }, setToast } = useContext(GlobalContext)
        const [activeModal, setActiveModal] = useState(false)
        const [error, setError] = useState({})
        const [loading, setLoading] = useState(false)
        const [formUser, setFormUser] = useState(inititalFormUser)

        const handleChangeText = (value, field) => {
                setFormUser({ ...formUser, [field]: value })
                setError(errorFormUser({ ...formUser, [field]: value }))
        }
        
        const errorFormUser = (form) => {
                //faltan las validaciones mas importantes
                let error = {}
                if (form.name.trim() === '') error.name = 'El nombre es requerido'
                if (form.fatherSurname.trim() === '') error.fatherSurname = 'El apellido paterno es requerido'
                if (form.motherSurname.trim() === '') error.motherSurname = 'El apellido materno es requerido'

                return error;
        }


        const getUser = () => {
                setLoading(true)
                let q = doc(db, 'users', uid);
                getDoc(q)
                        .then((doc) => {
                                let data = doc.data()
                                setFormUser(prev => ({ ...prev, ...data }))
                        })
                        .catch((error) => {
                                console.log(error)
                                setFormUser(inititalFormUser)
                        })
                        .finally(() => {
                                setLoading(false)
                        })
        }

        useEffect(() => {
                getUser()
        }, [])

        const closeModal = () => {
                setActiveModal(false)
        }

        const openModal = () => {
                getUser()
                setActiveModal(true)
        }

        const updateUser = () => {
                errorFormUser(formUser)

                if (Object.keys(error).length > 0) {
                        ToastAndroid.showWithGravity(
                                'Porfavor completa los campos requeridos',
                                ToastAndroid.LONG,
                                ToastAndroid.TOP
                        )
                        return;
                }
                setLoading(true)
                const userRef = doc(db, 'users', uid);
                updateDoc(userRef, formUser)
                        .then((response) => {
                                setToast({
                                        visible: true,
                                        title: 'Mis datos',
                                        type: 'success',
                                        timeOut: 3000,
                                        subtitle: 'Datos actualizados correctamente'
                                })
                        })
                        .catch((error) => {
                                console.error('Error updating document: ', error);
                        })
                        .finally(() => {
                                setLoading(false)
                                closeModal()
                        })
        }

        return {
                loading,
                formUser,
                getUser,
                updateUser,
                handleChangeText,
                activeModal,
                setActiveModal,
                closeModal,
                openModal,
                error,
        }
}

export default useUser
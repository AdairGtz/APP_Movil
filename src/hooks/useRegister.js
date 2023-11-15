import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { Alert } from "react-native"
import { db, auth } from "../firebase/firebase"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { GlobalContext } from "../context/globalContext"

const initialFormRegister = {
        name: '',
        email: '',
        password: '',
        password2: '',
        terms: false,
}

const errorFormRegister = {

}

const useRegister = () => {
        const navigation = useNavigation()
        const { setToast } = useContext(GlobalContext)
        const [checked, setChecked] = useState(false)
        const [loading, setLoading] = useState(false)
        const [formRegister, setFormRegister] = useState(initialFormRegister)

        const handleChangeText = (value, name) => {
                setFormRegister({ ...formRegister, [name]: value.trim() })
        }

        const saveUser = () => {
                setFormRegister({ ...formRegister, terms: checked })
                formRegister.email = formRegister.email.toLowerCase()
                setLoading(true)
                createUserWithEmailAndPassword(auth, formRegister.email, formRegister.password)
                        .then((userCredential) => {
                                const user = userCredential.user;
                                delete formRegister.password
                                delete formRegister.password2
                                formRegister.uid = user.uid
                                setDoc(doc(db, "users", user.uid), formRegister)
                                        .then((response) => {
                                                AsyncStorage.setItem('user', JSON.stringify({ ...formRegister, uid: user.uid }))
                                                setToast({
                                                        visible: true,
                                                        timeOut: 3000,
                                                        title: 'Usuario registrado correctamente',
                                                        subtitle: 'Bienvenido',
                                                        type: 'success',
                                                })
                                                navigation.navigate('home')
                                        })
                        })
                        .catch((error) => {
                                console.log(error)
                                const { code } = error

                                switch (code) {
                                        case 'auth/email-already-in-use':
                                                setToast({
                                                        visible: true,
                                                        title: 'Error',
                                                        timeOut: 3000,
                                                        subtitle: 'El correo ya esta registrado',
                                                        type: 'error',
                                                })
                                                break;
                                        case 'auth/invalid-email':
                                                setToast({
                                                        visible: true,
                                                        title: 'Error',
                                                        timeOut: 3000,
                                                        subtitle: 'El correo no es valido',
                                                        type: 'error',
                                                })
                                                break;
                                        case 'auth/weak-password':
                                                setToast({
                                                        visible: true,
                                                        title: 'Error',
                                                        timeOut: 3000,
                                                        subtitle: 'La contraseña debe tener al menos 6 caracteres',
                                                        type: 'error',
                                                })
                                                break;
                                        default:
                                                setToast({
                                                        visible: true,
                                                        title: 'Error',
                                                        timeOut: 3000,
                                                        subtitle: 'Ocurrio un error al registrar el usuario',
                                                        type: 'error',
                                                })
                                                break;
                                }
                        })
                        .finally(() => {
                                setLoading(false)
                        })
        }

        return {
                formRegister,
                setFormRegister,
                checked,
                setChecked,
                handleChangeText,
                saveUser,
                loading
        }
}

export default useRegister
import { collection, getDocs, query, where } from 'firebase/firestore'
import { app, auth, db } from '../firebase/firebase'
import { useContext, useEffect, useState } from 'react'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, onAuthStateChanged, getAuth } from 'firebase/auth'
import { GlobalContext } from '../context/globalContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { ToastAndroid } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session'

const initialFormLogin = {
        email: '',
        password: ''
}

WebBrowser.maybeCompleteAuthSession();

const useLogin = () => {

        const navigation = useNavigation()
        const { setToast, setSession } = useContext(GlobalContext)
        const [formLogin, setFormLogin] = useState(initialFormLogin)
        const [loading, setLoading] = useState(false)

        const handleChangeText = (value, name) => {
                setFormLogin({ ...formLogin, [name]: value })
        }

        const signIn = () => {
                formLogin.email = formLogin.email.trim().toLowerCase()
                formLogin.password = formLogin.password.trim()
                if (formLogin.email == "" || formLogin.password == "") return;

                setLoading(true)
                signInWithEmailAndPassword(auth, formLogin.email, formLogin.password)
                        .then((userCredential) => {
                                const user = userCredential.user;
                                getDocs(query(collection(db, "users"), where("email", "==", formLogin.email)))
                                        .then((querySnapshot) => {
                                                querySnapshot.forEach((doc) => {
                                                        let data = doc.data()
                                                        setSession(data)
                                                        AsyncStorage.setItem('user', JSON.stringify({ ...data, uid: user.uid }));
                                                        setToast({
                                                                visible: true,
                                                                timeOut: 3000,
                                                                title: 'Bienvenido',
                                                                subtitle: 'Usuario logueado correctamente',
                                                                type: 'success',
                                                        })
                                                        navigation.navigate('home')
                                                });
                                        }).catch((error) => {
                                        }).finally(() => {
                                                setLoading(false)
                                        })

                        })
                        .catch((error) => {
                                const { code } = error
                                switch (code) {
                                        case 'auth/user-not-found' || 'auth/wrong-password':
                                                setToast({
                                                        visible: true,
                                                        title: 'error',
                                                        timeOut: 3000,
                                                        subtitle: 'Usuario o contraseña incorrectos',
                                                        type: 'error',
                                                })
                                                break;
                                        case 'auth/too-many-requests':
                                                setToast({
                                                        visible: true,
                                                        title: 'error',
                                                        timeOut: 4000,
                                                        subtitle: 'Demasiados intentos fallidos, intente mas tarde',
                                                        type: 'error',
                                                })
                                                break;
                                        default:
                                                setToast({
                                                        visible: true,
                                                        title: 'error',
                                                        timeOut: 3000,
                                                        subtitle: 'Usuario o contraseña incorrectos',
                                                        type: 'error',
                                                })
                                                break;
                                }
                        }).finally(() => {
                                setLoading(false)
                        })
        }

        const logout = () => {
                AsyncStorage.removeItem('user')
                setToast({
                        visible: true,
                        title: 'Sesion cerrada',
                        timeOut: 3000,
                        subtitle: 'Hasta pronto',
                        type: 'success',
                })
                setSession(null)
                navigation.navigate('home')
        }

        const [request, response, promptAsync] = Google.useAuthRequest(
                {
                        clientId: '717191148605-fqf52jba27hlguosv5s2vvplrqao0b8h.apps.googleusercontent.com',
                        scopes: ['profile', 'email'],
                        redirectUri: Google.makeRedirectUri({
                                useProxy: true,
                        }),
                },
                {
                        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
                        tokenEndpoint: 'https://oauth2.googleapis.com/token',
                        revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
                }
        );

        useEffect(() => {
                if (response?.type === 'success') {
                        const { code } = response.params;
                        // You can now use the code to get the access token from your backend server
                }
        }, [response]);

        const signInWithGoogle = async () => {
                await promptAsync();
        };


        const signInWithFacebook = () => {
                //proxima funcionalidad 
                ToastAndroid.showWithGravity('Funcionalidad en proceso', ToastAndroid.SHORT, ToastAndroid.TOP);
        }

        const signInWithTwitter = () => {
                //proxima funcionalidad 
                ToastAndroid.showWithGravity('Funcionalidad en proceso', ToastAndroid.SHORT, ToastAndroid.TOP);
        }

        return {
                signIn,
                handleChangeText,
                loading,
                logout,
                signInWithGoogle,
                signInWithFacebook,
                signInWithTwitter
        }

}

export default useLogin
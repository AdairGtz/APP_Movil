import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
//estas api keys son solo meramente de prueba, ademas al pasar a produccion se deben cambiar y agregar a un .env

const firebaseConfig = {
        apiKey: "AIzaSyBQxvYvalPyyVzzYu6ey9XrHllO1XHJU5I",
        authDomain: "xochicalli-commerce.firebaseapp.com",
        projectId: "xochicalli-commerce",
        storageBucket: "xochicalli-commerce.appspot.com",
        messagingSenderId: "1065447557124",
        appId: "1:1065447557124:web:062473512037026f214d51"
};

/*
const firebaseConfig = {
        apiKey: "AIzaSyD9f139ZkGRDhxtjNwHgiz32GcQ3zvsmkA",
        authDomain: "api-prueba-xochi.firebaseapp.com",
        projectId: "api-prueba-xochi",
        storageBucket: "api-prueba-xochi.appspot.com",
        messagingSenderId: "717191148605",
        appId: "1:717191148605:web:0b9ddf3491715f42d36654"
};
*/
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);


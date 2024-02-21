import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6EsrUwKYJiY6trNqbl-90cQ2TV4Cmq30",
    authDomain: "blog-8fe5f.firebaseapp.com",
    projectId: "blog-8fe5f",
    storageBucket: "blog-8fe5f.appspot.com",
    messagingSenderId: "643758091394",
    appId: "1:643758091394:web:70d7c4b79139dafa65189b"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db=getFirestore(app);

export{auth,provider,db};
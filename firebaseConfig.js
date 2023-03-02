import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQs6hjY8RyoMidtFm1O7TIxLydTBRf_io",
    authDomain: "profile-app-test-14439.firebaseapp.com",
    projectId: "profile-app-test-14439",
    storageBucket: "profile-app-test-14439.appspot.com",
    messagingSenderId: "585253079052",
    appId: "1:585253079052:web:34c159dd6f0011f919c629",
    measurementId: "G-255647JXKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const  auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {database, auth, provider};
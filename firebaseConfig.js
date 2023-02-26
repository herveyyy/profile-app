// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const database = getFirestore();
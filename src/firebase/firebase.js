// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN2jfwxDJmOKl5CPcn-UD4xWEGRxFfAtI",
  authDomain: "internarea-e01aa.firebaseapp.com",
  projectId: "internarea-e01aa",
  storageBucket: "internarea-e01aa.appspot.com",
  messagingSenderId: "1054979047860",
  appId: "1:1054979047860:web:13292499b31b2768c632e1",
  measurementId: "G-BWSB734K00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}
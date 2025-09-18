// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeq3iQudhMqvB1-FdJe1r1u-XVh570TmE",
    authDomain: "login-form-275cc.firebaseapp.com",
    projectId: "login-form-275cc",
    storageBucket: "login-form-275cc.firebasestorage.app",
    messagingSenderId: "853332941559",
    appId: "1:853332941559:web:2ad8abc0b42a9958a111f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
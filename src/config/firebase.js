import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyADd3yUbfiwGYBKjx-7BNz52ueGRZkb6Po",
    authDomain: "crypto-e296f.firebaseapp.com",
    projectId: "crypto-e296f",
    storageBucket: "crypto-e296f.appspot.com",
    messagingSenderId: "203622496478",
    appId: "1:203622496478:web:4126793df88ffe995faa4f",
    measurementId: "G-YE5SNDYZ6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

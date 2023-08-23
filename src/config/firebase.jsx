import { initializeApp } from "firebase/app";

// import authentication and firestire (database) from firebase
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACR4aypb4jOIU6lilYm4aQzMfNwkP7AKE",
    authDomain: "crypto-base-d4189.firebaseapp.com",
    projectId: "crypto-base-d4189",
    storageBucket: "crypto-base-d4189.appspot.com",
    messagingSenderId: "823989506051",
    appId: "1:823989506051:web:20d0cfc872ca1204e8fe36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

// export app as default
export default app;
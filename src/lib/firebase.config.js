import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4fTHMKD3qhcho7UyuULN1apsA6UOgrHc",
    authDomain: "shortifylink-adfcc.firebaseapp.com",
    projectId: "shortifylink-adfcc",
    storageBucket: "shortifylink-adfcc.firebasestorage.app",
    messagingSenderId: "855828808449",
    appId: "1:855828808449:web:bb9f5e4308265ec7c11100",
    measurementId: "G-4PYYPMMDQE"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

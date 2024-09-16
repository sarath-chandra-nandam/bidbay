// src/components/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjETBt0ClV_W9HU3CkhuwYmMxAJVFLB4I",
  authDomain: "bidbay-6e8bf.firebaseapp.com",
  projectId: "bidbay-6e8bf",
  storageBucket: "bidbay-6e8bf.appspot.com",
  messagingSenderId: "670265910367",
  appId: "1:670265910367:web:4e9027673407189ff727ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

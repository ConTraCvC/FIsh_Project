import { initializeApp } from "firebase/app";

import { FirebaseApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBYr8W75g1pCNLSnQ6LeGb8adi2Z-BwHmM",
  authDomain: "fishshop-80d05.firebaseapp.com",
  databaseURL: "https://fishshop-80d05-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fishshop-80d05",
  storageBucket: "fishshop-80d05.appspot.com",
  messagingSenderId: "895322208642",
  appId: "1:895322208642:web:05594f7848d0714026b79b",
  measurementId: "G-E240S8D2FN"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const store = getStorage(app);


export default FirebaseApp
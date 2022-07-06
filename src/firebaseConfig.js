import { collection, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyX7lorWp53QqC2ind_S4jebkFSxIvUGM",
  authDomain: "ropa-9b604.firebaseapp.com",
  projectId: "ropa-9b604",
  storageBucket: "ropa-9b604.appspot.com",
  messagingSenderId: "589899799921",
  appId: "1:589899799921:web:dbf086cd4488e88f30aad0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionProd = collection(db, 'productos venta');

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyAzCXfXHpYoLlwFW5vGdBbxes9v5p6eHjM",
  authDomain: "trabajoreactcoderlisandrorp.firebaseapp.com",
  projectId: "trabajoreactcoderlisandrorp",
  storageBucket: "trabajoreactcoderlisandrorp.appspot.com",
  messagingSenderId: "729793803314",
  appId: "1:729793803314:web:bf63b37033fda2f8ddf82b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

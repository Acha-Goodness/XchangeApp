// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHKEgAibKqtvTWDlzyLQEsmq904ghq6z8",
  authDomain: "currencyexchange-1a1e8.firebaseapp.com",
  projectId: "currencyexchange-1a1e8",
  storageBucket: "currencyexchange-1a1e8.appspot.com",
  messagingSenderId: "615540160295",
  appId: "1:615540160295:web:297e2918a5cabef0cd5b02"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
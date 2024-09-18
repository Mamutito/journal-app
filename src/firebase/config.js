// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9O_aLztc7-YAgVbGt-pMI87sdrb_moNk",
  authDomain: "react-journal-eae24.firebaseapp.com",
  projectId: "react-journal-eae24",
  storageBucket: "react-journal-eae24.appspot.com",
  messagingSenderId: "222808118438",
  appId: "1:222808118438:web:dd9dec1683a7263587d067",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "zenaris-dcb40.firebaseapp.com",
  projectId: "zenaris-dcb40",
  storageBucket: "zenaris-dcb40.appspot.com",
  messagingSenderId: "228561153065",
  appId: "1:228561153065:web:84cd70ca78a6c70d338038",
  measurementId: "G-FFVZXMJYWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
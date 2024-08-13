// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABPErsAA_DRnXw2n6EsHCg8-IuiE5o3Eg",
  authDomain: "inventory-management-4077a.firebaseapp.com",
  projectId: "inventory-management-4077a",
  storageBucket: "inventory-management-4077a.appspot.com",
  messagingSenderId: "306443833474",
  appId: "1:306443833474:web:8918263091d9295039249b",
  measurementId: "G-WRYP59034P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};
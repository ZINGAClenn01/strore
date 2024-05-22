// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG4uVHZkjw3Uu9KZCRjMGMqmriPOo8xO8",
  authDomain: "store-c26a7.firebaseapp.com",
  projectId: "store-c26a7",
  storageBucket: "store-c26a7.appspot.com",
  messagingSenderId: "306979601483",
  appId: "1:306979601483:web:2f066c59ec4be9783ee1ce"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
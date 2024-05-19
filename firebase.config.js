// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrLWD6LsQ5AQjv61e0WJORKvF_CW5aQt4",
  authDomain: "cafe-7e494.firebaseapp.com",
  projectId: "cafe-7e494",
  storageBucket: "cafe-7e494.appspot.com",
  messagingSenderId: "283972662063",
  appId: "1:283972662063:web:434f4352fdf3521696a7da"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db }
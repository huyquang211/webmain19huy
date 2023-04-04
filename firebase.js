// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnPiKkGcuPmNJRwOfEY9qHR-x_8fhKOMg",
  authDomain: "website-main19.firebaseapp.com",
  projectId: "website-main19",
  storageBucket: "website-main19.appspot.com",
  messagingSenderId: "652392359106",
  appId: "1:652392359106:web:3fc6c3d2c1eeb7f02f875b",
  measurementId: "G-ZWEV2GLEFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
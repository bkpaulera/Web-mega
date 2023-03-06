// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcbYNM35DyI-nWM6K_BYhbpV-NGsFAxec",
  authDomain: "crystal-dynamics.firebaseapp.com",
  projectId: "crystal-dynamics",
  storageBucket: "crystal-dynamics.appspot.com",
  messagingSenderId: "585517539032",
  appId: "1:585517539032:web:76b15af730a798b3a301ad",
  measurementId: "G-3K5TH5LV2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKFMOvTfO73ZXCIS2bC5rgs1y2veNsQvc",
  authDomain: "coffee-store-bec18.firebaseapp.com",
  projectId: "coffee-store-bec18",
  storageBucket: "coffee-store-bec18.firebasestorage.app",
  messagingSenderId: "272116603420",
  appId: "1:272116603420:web:6dc6116705e3840d259dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
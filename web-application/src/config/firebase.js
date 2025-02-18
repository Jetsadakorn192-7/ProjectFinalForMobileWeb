// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChd5kiWywUOAh3XYCn_02hWY0jmjJGRzM",
  authDomain: "projectfinalwebapplication2568.firebaseapp.com",
  projectId: "projectfinalwebapplication2568",
  storageBucket: "projectfinalwebapplication2568.firebasestorage.app",
  messagingSenderId: "286234441326",
  appId: "1:286234441326:web:5bbf1d4ab1328289c9187f",
  measurementId: "G-5X234SBLE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider(); 
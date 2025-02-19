import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber };

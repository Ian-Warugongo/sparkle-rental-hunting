// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sparkle-rentals-c4586.firebaseapp.com",
  projectId: "sparkle-rentals-c4586",
  storageBucket: "sparkle-rentals-c4586.firebasestorage.app",
  messagingSenderId: "1016777208112",
  appId: "1:1016777208112:web:330c5c5a50ec04e81f18f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
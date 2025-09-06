// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sparkle-rentals.firebaseapp.com",
  projectId: "sparkle-rentals",
  storageBucket: "sparkle-rentals.firebasestorage.app",
  messagingSenderId: "892646410398",
  appId: "1:892646410398:web:b303908b1f15d00dd7138f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
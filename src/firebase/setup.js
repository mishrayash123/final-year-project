// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDLrDTgQ-YxBGZUIDrCwGYFayhkEhcjHYI",
  authDomain: "final-year-project-f184b.firebaseapp.com",
  projectId: "final-year-project-f184b",
  storageBucket: "final-year-project-f184b.appspot.com",
  messagingSenderId: "799098951870",
  appId: "1:799098951870:web:69b602d4cbca02470ea6ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export  const googleProvider=new GoogleAuthProvider(app)
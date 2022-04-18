// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhehwKhvld4bpBxS-14ipA5ARL3bevalo",
  authDomain: "tutor-assignment-ten.firebaseapp.com",
  projectId: "tutor-assignment-ten",
  storageBucket: "tutor-assignment-ten.appspot.com",
  messagingSenderId: "297226156480",
  appId: "1:297226156480:web:88f6dcf6efa7f0bbeab025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
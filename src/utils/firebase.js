// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJQAB9-xPF4ZjGd3S7cC6MUKXYY1COaDY",
  authDomain: "netflixgpt-32e15.firebaseapp.com",
  projectId: "netflixgpt-32e15",
  storageBucket: "netflixgpt-32e15.firebasestorage.app",
  messagingSenderId: "82994228359",
  appId: "1:82994228359:web:d3748360d6d199692bdc22",
  measurementId: "G-03J6VXPKTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
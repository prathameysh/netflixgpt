// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZi3CXnnkQn3dprzxCjqTF0fQd9IS4rqw",
  authDomain: "netflixgpt-5af3c.firebaseapp.com",
  projectId: "netflixgpt-5af3c",
  storageBucket: "netflixgpt-5af3c.firebasestorage.app",
  messagingSenderId: "1020788182493",
  appId: "1:1020788182493:web:932cd9d16a810f33767a34",
  measurementId: "G-BRPC5LN874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth(); 
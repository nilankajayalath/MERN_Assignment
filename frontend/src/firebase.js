// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM1vKlTZ_uzzZ77t5IVF525Cy9jn6Yh7w",
  authDomain: "student-crud-5078d.firebaseapp.com",
  projectId: "student-crud-5078d",
  storageBucket: "student-crud-5078d.firebasestorage.app",
  messagingSenderId: "311356329646",
  appId: "1:311356329646:web:b6d447a401ed9321e5e73f",
  measurementId: "G-D9N2V20EJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
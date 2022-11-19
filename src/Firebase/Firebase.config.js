// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn8k23ieP2Y7FpDZpkFLmNisbBJQHL3ng",
    authDomain: "doctors-portal-2cf96.firebaseapp.com",
    projectId: "doctors-portal-2cf96",
    storageBucket: "doctors-portal-2cf96.appspot.com",
    messagingSenderId: "25384438199",
    appId: "1:25384438199:web:1744ed18ff9724b0d00032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
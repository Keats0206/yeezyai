import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCrZstKsYqBngKtgjgxIscS719uWP4MM8",
  authDomain: "yeezyai.firebaseapp.com",
  projectId: "yeezyai",
  storageBucket: "yeezyai.appspot.com",
  messagingSenderId: "52526759280",
  appId: "1:52526759280:web:8f697f047d3b6a199d63b5",
  measurementId: "G-QKKBQHX5B9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
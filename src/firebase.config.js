// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import RegisterScreen from "./screens/RegisterScreen";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT456fMcFyPAKj7SE3OD-59TUAVgBY30k",
  authDomain: "otpproject-a3c4a.firebaseapp.com",
  projectId: "otpproject-a3c4a",
  storageBucket: "otpproject-a3c4a.appspot.com",
  messagingSenderId: "284394034429",
  appId: "1:284394034429:web:3f2d10f2accf91ec4c1a94",
  measurementId: "G-ESLFY6EBNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
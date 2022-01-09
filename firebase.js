// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2K3Qv2adEP_R-W-Odqm84n6LTKNzP1Js",
  authDomain: "instagram-clone-590d6.firebaseapp.com",
  projectId: "instagram-clone-590d6",
  storageBucket: "instagram-clone-590d6.appspot.com",
  messagingSenderId: "161393587358",
  appId: "1:161393587358:web:a37eac007e3b4d4f8b778f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
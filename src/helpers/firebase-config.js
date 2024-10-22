// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  projectId: "inscribe-1b293",
  authDomain: process.env.AUTH_DOMAIN,
  storageBucket: process.env.BUCKET_URL,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  // measurementId: "G-XPYRKBM8Y4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const API = getFirestore(app);
// const analytics = getAnalytics(app);

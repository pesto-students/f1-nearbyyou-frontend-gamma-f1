import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa9QQgUgYWJZwz1xEwZ7fhqBgvBSfDdYA",
  authDomain: "nearbyyou-80c11.firebaseapp.com",
  projectId: "nearbyyou-80c11",
  storageBucket: "nearbyyou-80c11.appspot.com",
  messagingSenderId: "253029394119",
  appId: "1:253029394119:web:d446ce5a2e2cf44e9540e2",
  measurementId: "G-CTHYY0K7XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
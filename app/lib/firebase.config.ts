// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqSjMSXIf-VwzKIfXvnYmyJjW_FcEHoV0",
  authDomain: "gradzee-4ac74.firebaseapp.com",
  projectId: "gradzee-4ac74",
  storageBucket: "gradzee-4ac74.firebasestorage.app",
  messagingSenderId: "202951338033",
  appId: "1:202951338033:web:8bb28a2979c10e13360d10",
  measurementId: "G-GZ3XFZW7P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
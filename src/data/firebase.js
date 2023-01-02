// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyComIWsgE-QqQsPrq7NAeLZBIS-X4D68qs",
  authDomain: "ozma-4e058.firebaseapp.com",
  projectId: "ozma-4e058",
  storageBucket: "ozma-4e058.appspot.com",
  messagingSenderId: "1058422422941",
  appId: "1:1058422422941:web:06784d1e388cffec9a0374",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

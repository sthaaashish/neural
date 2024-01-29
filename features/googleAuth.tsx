
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk3qCBQP5zVl2-Ai6HK_008cQ60DnajYc",
  authDomain: "neuro-67cfe.firebaseapp.com",
  projectId: "neuro-67cfe",
  storageBucket: "neuro-67cfe.appspot.com",
  messagingSenderId: "839423465758",
  appId: "1:839423465758:web:69001920cc985dcc51110f",
  measurementId: "G-S2C1QGN7FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider= new GoogleAuthProvider();
export{auth,provider}
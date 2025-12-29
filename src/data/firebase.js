import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWgwY7Jh3WRNwxwUwfPAa6e-jPm2SWfNE",
  authDomain: "la-tiendita-react.firebaseapp.com",
  projectId: "la-tiendita-react",
  storageBucket: "la-tiendita-react.firebasestorage.app",
  messagingSenderId: "251565546322",
  appId: "1:251565546322:web:343cf3a1f5ed776441388b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

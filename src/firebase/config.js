import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcRIbh6svazI6EsKw9zSHMIsGYMaigcXM",
  authDomain: "vue-blog-system-b526b.firebaseapp.com",
  projectId: "vue-blog-system-b526b",
  storageBucket: "vue-blog-system-b526b.appspot.com",
  messagingSenderId: "48031322828",
  appId: "1:48031322828:web:ef134dbc87c2546dfda869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

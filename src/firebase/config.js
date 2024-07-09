// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore"; 

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyAcRIbh6svazI6EsKw9zSHMIsGYMaigcXM",
  authDomain: "vue-blog-system-b526b.firebaseapp.com",
  projectId: "vue-blog-system-b526b",
  storageBucket: "vue-blog-system-b526b.appspot.com",
  messagingSenderId: "48031322828",
  appId: "1:48031322828:web:ef134dbc87c2546dfda869"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

// Initialize Firestore
let db = getFirestore(app);

// Use serverTimestamp correctly
export { db, serverTimestamp };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "quiz-60779.firebaseapp.com",
  projectId: "quiz-60779",
  storageBucket: "quiz-60779.appspot.com",
  messagingSenderId: "573595099180",
  appId: "1:573595099180:web:50671b1a95177e329af189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database service
const firestore = getFirestore(app);

export { firestore }; 
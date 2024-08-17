import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPR33X2O28HY0D2MzyUsTm7_3aroWMCzI",
  authDomain: "react-noteapp-62df5.firebaseapp.com",
  projectId: "react-noteapp-62df5",
  storageBucket: "react-noteapp-62df5.appspot.com",
  messagingSenderId: "1023550340604",
  appId: "1:1023550340604:web:d08e899798f70893b4c679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

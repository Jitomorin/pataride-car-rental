//   apiKey: "AIzaSyAiHgHNw75qkle9w58ONozYH2pbZp8j9KU",
//   authDomain: "pata-ride-web.firebaseapp.com",
//   projectId: "pata-ride-web",
//   storageBucket: "pata-ride-web.appspot.com",
//   messagingSenderId: "67588996400",
//   appId: "1:67588996400:web:8805b78583a8b299fe1cf5",
import { initializeApp, getApps } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebase_app);
export const db = getFirestore(firebase_app);
export const storage = getStorage(firebase_app);

export default firebase_app;

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase_app, { auth } from "./config";

export async function signup(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password).catch(
    (error) => {
      console.log(error.code);
      // return error.code;
    }
  );
}

export async function login(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return await signOut(auth);
}

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase_app, { auth } from "./config";

export async function signup(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password).catch(
    (error) => {
      console.log(error);
    }
  );
}

export async function login(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password).catch(
    (error) => {
      console.log(error);
    }
  );
}

export async function logout() {
  return await signOut(auth);
}

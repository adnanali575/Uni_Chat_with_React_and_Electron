import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseInit";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
} from "firebase/firestore/lite";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebase from "firebase/compat/app";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  firebase,
  db,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  auth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

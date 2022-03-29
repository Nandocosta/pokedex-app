import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getAuth, 
  onAuthStateChanged, 
  updateProfile,
  updateEmail,
  updatePassword,
  updateCurrentUser
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyADj0WCgdJqyOjb-KhdVubmQ7vdoHJLduU",
    authDomain: "pokedex-41d80.firebaseapp.com",
    projectId: "pokedex-41d80",
    storageBucket: "pokedex-41d80.appspot.com",
    messagingSenderId: "473581154325",
    appId: "1:473581154325:web:5f48359876d5b6767c5e1c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const firebase = {
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword,
    updateCurrentUser,
    app,
    getAuth,
    auth
}
export default firebase;
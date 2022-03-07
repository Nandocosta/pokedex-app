import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyADj0WCgdJqyOjb-KhdVubmQ7vdoHJLduU",
    authDomain: "pokedex-41d80.firebaseapp.com",
    projectId: "pokedex-41d80",
    storageBucket: "pokedex-41d80.appspot.com",
    messagingSenderId: "473581154325",
    appId: "1:473581154325:web:5f48359876d5b6767c5e1c"
  };

  const app = initializeApp(firebaseConfig);
  const firebase = {
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    app,
    getAuth
    }
export default firebase;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA1AaYU38ww1atyXvHw-HaQtamcJwLTgZY",
    authDomain: "chat-64569.firebaseapp.com",
    projectId: "chat-64569",
    storageBucket: "chat-64569.appspot.com",
    messagingSenderId: "58257999555",
    appId: "1:58257999555:web:9ee07a920d89219ab4c476"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
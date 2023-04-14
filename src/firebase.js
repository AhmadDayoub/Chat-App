import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeDafy-U6e7SceH8y4lG6AEnxelC3QbCQ",
  authDomain: "chat-c60d1.firebaseapp.com",
  projectId: "chat-c60d1",
  storageBucket: "chat-c60d1.appspot.com",
  messagingSenderId: "586673183239",
  appId: "1:586673183239:web:ec9247f5ec895cfff168a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

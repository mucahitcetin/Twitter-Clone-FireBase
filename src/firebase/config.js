import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGE,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

//giriş yapma seçenekleri firebase konsolunda mail ve google olarak seçildi. buraya bu şekilde ekleniyor
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//veritabanının referansını al
export const db = getFirestore(app);

// storage ın referansını al
export const storage = getStorage(app);

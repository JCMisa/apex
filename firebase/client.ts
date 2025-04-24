import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgR1VwIrCfLglwGskoUHPsp6_nuHyP9tA",
  authDomain: "apex-84124.firebaseapp.com",
  projectId: "apex-84124",
  storageBucket: "apex-84124.firebasestorage.app",
  messagingSenderId: "830888344359",
  appId: "1:830888344359:web:7f8479e4fb0f00bfb74702",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

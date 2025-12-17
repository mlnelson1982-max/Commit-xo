// Initial Firebase Config - Placeholder until user provides keys or we read from .env
// Ideally we would fetch these from the project, but for now we set up the structure.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    // API Key is still required from the user
    apiKey: "REPLACE_WITH_YOUR_API_KEY",
    authDomain: "commit-plus-prod.firebaseapp.com",
    projectId: "commit-plus-prod",
    storageBucket: "commit-plus-prod.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

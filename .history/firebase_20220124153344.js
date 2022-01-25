import { firebase, initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtao7GPEtYlsNabwjYskk8n6DEIbNo6VQ",
  authDomain: "signal-clone-4f5d4.firebaseapp.com",
  projectId: "signal-clone-4f5d4",
  storageBucket: "signal-clone-4f5d4.appspot.com",
  messagingSenderId: "958936105112",
  appId: "1:958936105112:web:aa41ae6e9c1b34ae23d0ed",
  measurementId: "G-1WPXHBPTRQ",
};

let app;
if (getApps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

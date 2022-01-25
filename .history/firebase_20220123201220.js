import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

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
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
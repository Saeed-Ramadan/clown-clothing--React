import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWelqRec9qhIokN_4D7cWmzMpNeyW6jPU",
  authDomain: "clown-project-db.firebaseapp.com",
  projectId: "clown-project-db",
  storageBucket: "clown-project-db.appspot.com",
  messagingSenderId: "168627482227",
  appId: "1:168627482227:web:809865304da33173424406",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select-account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3bxAEE5_6emZZ1YhQ88hmnSE7XgkunA0",
  authDomain: "crwn-clothing-db-bf1ab.firebaseapp.com",
  projectId: "crwn-clothing-db-bf1ab",
  storageBucket: "crwn-clothing-db-bf1ab.appspot.com",
  messagingSenderId: "586034839883",
  appId: "1:586034839883:web:1b4f65e3f76444d53168ce",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

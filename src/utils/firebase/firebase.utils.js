import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDS6oviQQ9_ZNQr1dLM9C4_BT2ZdG6icLo",
  authDomain: "crwnclothreact.firebaseapp.com",
  projectId: "crwnclothreact",
  storageBucket: "crwnclothreact.appspot.com",
  messagingSenderId: "255910682274",
  appId: "1:255910682274:web:8ead39a8079a11df6741fb"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

 provider.setCustomParameters({
    prompt:"select_account"

 })

 export const auth = getAuth();
 export const signInWithGooglePopup =() => signInWithPopup(auth,provider);

 export const db = getFirestore()

 export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db , 'users' , userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())
 }
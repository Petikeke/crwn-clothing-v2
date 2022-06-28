import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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

const googleProvider = new GoogleAuthProvider();

 googleProvider.setCustomParameters({
    prompt:"select_account"

 })

 export const auth = getAuth();
 export const signInWithGooglePopup =() => signInWithPopup(auth,googleProvider);
 export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

 export const db = getFirestore()

 export const createUserDocumentFromAuth = async(
     userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db , 'users' , userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
         await setDoc(userDocRef,  {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
         });
        } catch (error) {
            console.log('error creating the user' , error.message);
        }
    }
 return userDocRef;

 }

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createAuthUserWithEmailAndPassword(auth, email, password)
 }
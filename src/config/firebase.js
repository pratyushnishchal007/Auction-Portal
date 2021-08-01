import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


const app =firebase.initializeApp({
    apiKey: "AIzaSyC3PXSCEkBx9UNkNwV17C_mIxGZ_DJpJgk",
    authDomain: "auction-b7d1b.firebaseapp.com",
    projectId: "auction-b7d1b",
    storageBucket: "auction-b7d1b.appspot.com",
    messagingSenderId: "585648699166",
    appId: "1:585648699166:web:5d8636ebaa9bd144f4fb0f"

})

export const timestamp=firebase.firestore.FieldValue.serverTimestamp;

export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
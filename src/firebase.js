import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: 'AIzaSyBudrIOCKi9TPJ7XfnQxzvLNsp52qFscKM',
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: 'https://best-timer-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });


const app = firebase.initializeApp({
    apiKey: "AIzaSyBudrIOCKi9TPJ7XfnQxzvLNsp52qFscKM",
    authDomain: "best-timer.firebaseapp.com",
    databaseURL: "https://best-timer-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "best-timer",
    storageBucket: "best-timer.appspot.com",
    messagingSenderId: "63377642841",
    appId: "1:63377642841:web:d708e700013ee8cc4ca848"
});

export const auth = app.auth();
export const db = firebase.firestore()
export default app;


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }


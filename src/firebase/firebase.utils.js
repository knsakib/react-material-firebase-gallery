import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
   apiKey: "AIzaSyCnEkcpYL5FOvxdF7nE2HbzETbPZh-qaQY",
   authDomain: "code-gallery.firebaseapp.com",
   databaseURL: "https://code-gallery.firebaseio.com",
   projectId: "code-gallery",
   storageBucket: "code-gallery.appspot.com",
   messagingSenderId: "277365748013",
   appId: "1:277365748013:web:b307d1ce33bae73f62a3a4",
   measurementId: "G-ESY4EHF7DD"
 };

 firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'})

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;

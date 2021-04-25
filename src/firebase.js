 import firebase from "firebase"

 const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCS1W0w1Y4pDCboyAKtaS_VqcArLqC7Np4",
    authDomain: "free-21395.firebaseapp.com",
    projectId: "free-21395",
    storageBucket: "free-21395.appspot.com",
    messagingSenderId: "129516018243",
    appId: "1:129516018243:web:18d6f6814c97bdf34452f6",
    measurementId: "G-8D5WB7XBWS"
  });

  // Initialize Firebase
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };
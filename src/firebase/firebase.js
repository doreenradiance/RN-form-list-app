import *as firebase from "firebase";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCclXN3F77P2AiycznQjaUh9A-kpD4i_uA",
    authDomain: "rnfirebase-8cbfe.firebaseapp.com",
    projectId: "rnfirebase-8cbfe",
    storageBucket: "rnfirebase-8cbfe.appspot.com",
    messagingSenderId: "958229726034",
    appId: "1:958229726034:web:c2dfdb105f729f83f7f08b"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;
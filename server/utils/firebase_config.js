const Firebase = require('firebase/app');
const FirebaseAuth = require('firebase/auth');
const Firestore=require('firebase/firestore');

//const Parse = require("../utils/parse_config");



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsP7P7orJiW2K5-t5PwdJgi0bfNF8ufgQ",
  authDomain: "foodbank-manager.firebaseapp.com",
  projectId: "foodbank-manager",
  storageBucket: "foodbank-manager.appspot.com",
  messagingSenderId: "59102412508",
  appId: "1:59102412508:web:0664a5f0a5ffb189387e19"
};

// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
const auth = FirebaseAuth.getAuth();
const db=Firestore.getFirestore(app);


module.exports = {Firestore, db, FirebaseAuth, auth };
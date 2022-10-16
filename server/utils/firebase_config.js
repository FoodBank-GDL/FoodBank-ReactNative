const Firebase = require('firebase/app');
const FirebaseAuth = require('firebase/auth');
const Firestore = require('firebase/firestore');

require("dotenv").config();


const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

const app = Firebase.initializeApp(firebaseConfig);
const auth = FirebaseAuth.getAuth();
const db = Firestore.getFirestore(app);


module.exports = {Firestore, db, FirebaseAuth, auth };
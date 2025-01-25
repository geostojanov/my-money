import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwfrBnpLsH70WlhwSkHuKHb7xRDaos9dA",
  authDomain: "mymoney-ed4b8.firebaseapp.com",
  projectId: "mymoney-ed4b8",
  storageBucket: "mymoney-ed4b8.firebasestorage.app",
  messagingSenderId: "515578593700",
  appId: "1:515578593700:web:fe59645f64aa9d43e08131"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
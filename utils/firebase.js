
  import firebase from 'firebase/app'
  import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyChKdCBnXWk8hVO9AuF9GtAdWzAIDeTEMM",
    authDomain: "restaurants-ce3cd.firebaseapp.com",
    projectId: "restaurants-ce3cd",
    storageBucket: "restaurants-ce3cd.appspot.com",
    messagingSenderId: "1002372083383",
    appId: "1:1002372083383:web:a17f9290ed48d9c7bda732"
  };
  // Initialize Firebase
  export const firebaseApp= firebase.initializeApp(firebaseConfig);

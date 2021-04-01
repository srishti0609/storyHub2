import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase


  var firebaseConfig = {
    apiKey: "AIzaSyCpJCjBmAuz8Hs4TSyEMm5Qw7nASkPemvg",
    authDomain: "storyhub-bcda3.firebaseapp.com",
    projectId: "storyhub-bcda3",
    storageBucket: "storyhub-bcda3.appspot.com",
    messagingSenderId: "374937482859",
    appId: "1:374937482859:web:a68b62c31eddee3442232e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default  firebase.firestore()                                   
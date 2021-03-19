import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBMhj7wyzEgFlog2KdPyTdos3qkHFq3KOA",
    authDomain: "student-help-student-app.firebaseapp.com",
    projectId: "student-help-student-app",
    storageBucket: "student-help-student-app.appspot.com",
    messagingSenderId: "276249047180",
    appId: "1:276249047180:web:6e79c1324ab23c1ffb0ba9",
    measurementId: "G-Q1VMM6BN3B"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
 
  


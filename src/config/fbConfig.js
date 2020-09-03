import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
require('firebase/functions');

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyAB1UN9u91uOT2fOKW-HyxVDZcOr-oc0bI",
        authDomain: "planner-fc6ee.firebaseapp.com",
        databaseURL: "https://planner-fc6ee.firebaseio.com",
        projectId: "planner-fc6ee",
        storageBucket: "planner-fc6ee.appspot.com",
        messagingSenderId: "869929763478",
        appId: "1:869929763478:web:7af951569a7f8db00db8b7",
        measurementId: "G-WTXJVQG347"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      //firebase.analytics();
      //firebase.firestore().settings({timestampsInSnapshots:true})
      firebase.firestore()

      if (window.location.hostname === 'localhost') {
        console.log("testing locally -- hitting local functions and firestore emulators");
        firebase.functions().useFunctionsEmulator('http://localhost:5001');
        firebase.firestore().settings({
          host: 'localhost:8080',
          ssl: false
        });
      }
      export default firebase;
   
      
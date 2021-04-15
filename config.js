import firebase from 'firebase';

 // Your web app's Firebase configuration
  var firebaseConfig = {
 apiKey: "AIzaSyAgnITinpBFt71FgA-CrL81OTWzbw1OZFs",
    authDomain: "school-attendance-app-d7ce0.firebaseapp.com",
    databaseURL: "https://school-attendance-app-d7ce0.firebaseio.com",
    projectId: "school-attendance-app-d7ce0",
    storageBucket: "school-attendance-app-d7ce0.appspot.com",
    messagingSenderId: "693436981822",
    appId: "1:693436981822:web:6e626844861e45bd82e76f",
    measurementId: "G-JWWWS4DCHW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default  firebase.database();
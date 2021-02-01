
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBqrRGOmC3yT2iDgendsf9Ve4hkCO3C9lE",
    authDomain: "kwitter-bcd40.firebaseapp.com",
    databaseURL: "https://kwitter-bcd40-default-rtdb.firebaseio.com",
    projectId: "kwitter-bcd40",
    storageBucket: "kwitter-bcd40.appspot.com",
    messagingSenderId: "489696790645",
    appId: "1:489696790645:web:dcbe2d99a582ffb5b0903c",
    measurementId: "G-BLHT0N51S0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

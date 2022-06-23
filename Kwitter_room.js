const firebaseConfig = {
    apiKey: "AIzaSyCEr62yd4odlE0unJRi-nGLJHJmkWYbngc",
    authDomain: "kwitterdatabase-ac0c0.firebaseapp.com",
    projectId: "kwitterdatabase-ac0c0",
    storageBucket: "kwitterdatabase-ac0c0.appspot.com",
    messagingSenderId: "69101532180",
    appId: "1:69101532180:web:8a2c38d3475a800ba66301",
    measurementId: "G-4JH9X5CG07"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
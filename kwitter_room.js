
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDwLZw4DufjIFUX6Fhcy02E_VRmfXuhkWo",
      authDomain: "kwitter-2d733.firebaseapp.com",
      projectId: "kwitter-2d733",
      storageBucket: "kwitter-2d733.appspot.com",
      messagingSenderId: "390168974628",
      appId: "1:390168974628:web:d0fb186fec9e2994b60fb1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

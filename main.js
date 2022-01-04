
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO72-e3ALUvRW1ZKmH_83QF6WvYwTC5Mw",
    authDomain: "kwitter-11a59.firebaseapp.com",
    databaseURL: "https://kwitter-11a59-default-rtdb.firebaseio.com",
    projectId: "kwitter-11a59",
    storageBucket: "kwitter-11a59.appspot.com",
    messagingSenderId: "793575252103",
    appId: "1:793575252103:web:65351b119f193d4a709822"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
room_name= document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({});

localStorage.setItem("room_name", room_name)
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
 
console.log("room name -" + Room_names);
row = "<div class= 'room_name id=" +Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div><hr>";
document.getElementById("output").innerHTML += row;
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
window.location = "index.html";
    
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
window.location = "kwitter.html";
}

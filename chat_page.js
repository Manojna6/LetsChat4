user_name = localStorage.getItem("Username");
room_name = localStorage.getItem("roomname");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCUbLdpXFKQif6QAVGvk5gabFiUWwcswn8",
    authDomain: "lets-chat-9bc9d.firebaseapp.com",
    databaseURL: "https://lets-chat-9bc9d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-9bc9d",
    storageBucket: "lets-chat-9bc9d.appspot.com",
    messagingSenderId: "481710097890",
    appId: "1:481710097890:web:e39246120097f60c3ea5bb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout(){
    window.location = "index.html";
    localStorage.removeItem("Username");
    localStorage.removeItem("room_name");
}

function send(){
    msg= document.getElementById("messageipt").value;
    console.log(room_name);
    console.log(user_name);
    console.log(msg);
    firebase.database().ref("/").child(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}
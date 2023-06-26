// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWvbrip1kl0Df4Susay2nbqSeKbWzt3xc",
  authDomain: "projeto94-c9349.firebaseapp.com",
  projectId: "projeto94-c9349",
  storageBucket: "projeto94-c9349.appspot.com",
  messagingSenderId: "944337034442",
  appId: "1:944337034442:web:cfac916379739a6b98a833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebaseMessageId = childKey;
  messageData = childData;
//Início do código
  console.log(firebaseMessageId);
  console.log(messageData);
  name = messageData['name'];
  message = messageData['message'];
  like = messageData['like'];
  nameWithTag = "<h4> "+ name +"<img class ='user_tick src='tick.png'></h4>";
  messageWithTag = "<h4 class='message_h4'>" + message +"</h4>";
likeButton ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
  spanWithTag = "<span class='glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
 row= nameWithTag + messageWithTag + likeButton + spanWithTag;
 document.getElementById("output").innerHTML += row; 


//Fim do código
} });  }); }
getData();
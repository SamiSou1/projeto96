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
userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
                { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
                    { childKey  = childSnapshot.key;
       roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

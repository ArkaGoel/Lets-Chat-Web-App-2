// Import the functions you need from the SDKs you need
import {initializeApp}  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcSFi65eQ_RYzxBtIp8WIqxbG8XRO4Ayc",
  authDomain: "lets-chat-web-app-bd0d9.firebaseapp.com",
  projectId: "lets-chat-web-app-bd0d9",
  storageBucket: "lets-chat-web-app-bd0d9.appspot.com",
  messagingSenderId: "181606416950",
  appId: "1:181606416950:web:d4a2e177210d51e9cece97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name").value;
document.getElementById("welcome_user").innerHTML = "Welcome"+user_name +"!"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs0qmo3KdqK4D3Kr13kmeMISX0DxjsUA8",
  authDomain: "proyectoreactcoder-fda70.firebaseapp.com",
  projectId: "proyectoreactcoder-fda70",
  storageBucket: "proyectoreactcoder-fda70.appspot.com",
  messagingSenderId: "838399926730",
  appId: "1:838399926730:web:04d255c3323588f1942f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)

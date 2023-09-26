import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDby-ZGdyt3npVf0KmpGKrKDdFarWVEzUM",
    authDomain: "portfolio-remake-ef1ce.firebaseapp.com",
    projectId: "portfolio-remake-ef1ce",
    storageBucket: "portfolio-remake-ef1ce.appspot.com",
    messagingSenderId: "868547894990",
    appId: "1:868547894990:web:f014fde8673bae3bf5fa9f",
    measurementId: "G-5JZNLQYT3W"
  };
  
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

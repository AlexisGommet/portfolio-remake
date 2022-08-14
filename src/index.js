import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDby-ZGdyt3npVf0KmpGKrKDdFarWVEzUM",
    authDomain: "portfolio-remake-ef1ce.firebaseapp.com",
    projectId: "portfolio-remake-ef1ce",
    storageBucket: "portfolio-remake-ef1ce.appspot.com",
    messagingSenderId: "868547894990",
    appId: "1:868547894990:web:f014fde8673bae3bf5fa9f",
    measurementId: "G-5JZNLQYT3W"
  };
  
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

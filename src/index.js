import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// index.js is the first file that will be executed when the project is runned.

//selecting the div by root variable
const root = ReactDOM.createRoot(document.getElementById('root'));
//rendering the jsx(in this case App.js) in root variable
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

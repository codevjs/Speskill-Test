import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './pages/terminal'; // to show shop page replace ./pages/terminal to ./pages/shop
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Bmi from './hello/Bmi';
import reportWebVitals from './reportWebVitals';
import Login from './hello/Login';
import Calc from './hello/Calc';
import Grade from './hello/Grade'

ReactDOM.render(
  <React.StrictMode>
    <Login />
    <Bmi />
    <Calc />
    <Grade />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

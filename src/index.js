//Librairies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap js
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

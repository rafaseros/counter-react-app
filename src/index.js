import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

const divRoot = document.querySelector('#app');

ReactDOM.render(<App saludo="Hola, Soy Rafael" />, divRoot);

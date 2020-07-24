import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';
import CounterApp from './counterApp';

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp />, divRoot);
// ReactDOM.render(<App />, divRoot);

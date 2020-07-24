import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import CounterApp from './counterApp'


const divRoot = document.querySelector('#app');

// ReactDOM.render(<CounterApp value={0} />, divRoot);
ReactDOM.render(<App />, divRoot);

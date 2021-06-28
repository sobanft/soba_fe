import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

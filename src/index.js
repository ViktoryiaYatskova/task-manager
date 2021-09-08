import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.logError = alert; // for debugging via Cloud9

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

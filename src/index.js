import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App.jsx';
import './index.css';
import FontStyles from './fontStyles';

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


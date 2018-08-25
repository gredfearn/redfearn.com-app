import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import amplify from './utils/amplify';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// init AWS Amplify
amplify();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
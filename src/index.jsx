import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layouts/App';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import './stylesheet/common.css';
import './stylesheet/fonts.css';
import './stylesheet/vars.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

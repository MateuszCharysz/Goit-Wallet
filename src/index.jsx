import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

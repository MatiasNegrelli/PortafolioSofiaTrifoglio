// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LandingDos from './LandingDos.jsx'; // importa tu nueva landing
import './index.css';
import LandingTres from './LandingTres.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/segunda" element={<LandingDos />} />
        <Route path="/tercera" element={<LandingTres />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

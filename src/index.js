import React from 'react';
import ReactDOM from 'react-dom/client';
import { UniversidadApp } from './UniversidadApp';
import './style.css';

const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(
  <React.StrictMode>
    <UniversidadApp />
  </React.StrictMode>
);

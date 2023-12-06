import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CatsContextProvider } from './context/CatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CatsContextProvider>
      <App />
    </CatsContextProvider>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CatsContextProvider } from './context/CatContext';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CatsContextProvider>
        <App />
      </CatsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);



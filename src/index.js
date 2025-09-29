import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
//import reportWebVitals from './reportWebVitals'; Esto se elimina

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(console.log); igual se elimina pero sirve para ver el resultado en la consola

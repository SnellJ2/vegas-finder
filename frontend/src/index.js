import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { COLORS } from './constants/colors';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const rootElement = document.documentElement;
rootElement.style.setProperty('--color-primary', COLORS.PRIMARY);
rootElement.style.setProperty('--color-primary-dark', COLORS.PRIMARY_DARK);
rootElement.style.setProperty('--color-white', COLORS.WHITE);
rootElement.style.setProperty('--color-white-dark', COLORS.WHITE_DARK);
rootElement.style.setProperty('--color-black', COLORS.BLACK);
rootElement.style.setProperty('--color-cta-button', COLORS.CTA_BUTTON);
rootElement.style.setProperty('--color-cta-button-dark', COLORS.CTA_BUTTON_DARK);
rootElement.style.setProperty('--color-link', COLORS.LINK);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

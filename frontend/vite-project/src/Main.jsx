import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store.jsx';
import "./main.css";
import "./pages/SignIn/style.css";
import "./pages/User/style.css"
import "./components/Features/style.css";
import "./components/Footer/style.css";
import "./components/Header/style.css";
import "./components/Hero/style.css";
import "./components/UserContent/style.css";
import "./components/signInContent/style.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

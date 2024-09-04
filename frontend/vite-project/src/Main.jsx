import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store.jsx';
import "./style/main.css";
import "./style/pages/sign-in.css";
import "./style/components/features.css";
import "./style/components/footer.css";
import "./style/components/header.css";
import "./style/components/hero.css";
import "./style/components/user-content.css";
import "./style/components/sign-in-content.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

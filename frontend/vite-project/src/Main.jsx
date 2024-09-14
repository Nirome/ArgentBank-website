import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store.jsx';
import "./main.css";
import "./styles/pages/sign-in.css";
import "./styles/components/features.css";
import "./styles/components/footer.css";
import "./styles/components/header.css";
import "./styles/components/hero.css";
import "./styles/components/user-content.css";
import "./styles/components/sign-in-content.css";
import "./styles/pages/user.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

import React from 'react';
import './index.css'
import { createRoot } from "react-dom/client";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {store} from './app/store'
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  </Provider>
);

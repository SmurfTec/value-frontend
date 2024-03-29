import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

// * ---------------- Style Sheets ------------------------ * //
import 'react-toastify/dist/ReactToastify.css';
import store from 'store';
import { ToastContainer } from 'react-toastify';
// * ---------------------------------------- * //

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);

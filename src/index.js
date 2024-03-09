import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { storeReducer } from './storeReducer';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeReducer}>
      <App />
    </Provider>
  </React.StrictMode>
);

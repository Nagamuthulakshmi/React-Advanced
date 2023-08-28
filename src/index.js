import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextProvider from './ContextProvider';
import { Provider } from 'react-redux';
import store from './CounterRedux/index';
import shop from './CounterReduxToolKit/CounterSlice';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {shop}>
  {/* <Provider store = {store}> */}
  <ContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>
  {/* </Provider> */}
  </Provider>
);



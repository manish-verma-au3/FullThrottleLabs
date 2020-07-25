import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './Redux/reducer/allReducer';

const mystore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(
  <React.StrictMode>
      <Provider store={mystore}> <App/> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

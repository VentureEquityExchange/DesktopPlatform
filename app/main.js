import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './utilities/CreateStore';

const store = createStore();


ReactDOM.render(
  <Provider store={store} >
    <div>Your Main React Component Here</div>
  </Provider >
  ,
  document.getElementById('App')
);

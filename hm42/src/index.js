import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { createStore } from 'redux';
import {todoReducer} from './store/todos';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(todoReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
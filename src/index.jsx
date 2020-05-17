import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import Counter_class from './components/Counter_class';
import Counter_func from './components/Counter_func';
import Counter_hooks from './components/Counter_hooks';

const store = createStore(reducer());

ReactDOM.render(
  <Provider store={store}>
    <Counter_class />
    <Counter_func />
    <Counter_hooks />
  </Provider>,
  document.getElementById('app')
);

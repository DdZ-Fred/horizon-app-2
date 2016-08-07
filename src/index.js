import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import rootReducer from './reducers';
import routes from './routes';
// import initCollections from './collections';


const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('app')
);

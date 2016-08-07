import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PostsList from './components/PostsList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsList} />
  </Route>
);

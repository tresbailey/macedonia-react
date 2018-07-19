import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/home';
import Sermons from './components/sermons/sermons';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/sermons" component={Sermons} />
  </Router>
);

export default Routes;

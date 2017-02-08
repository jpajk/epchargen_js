import React from 'react';
import {Router, Route} from 'react-router';

import App from 'app/shared/components/App';

const Routes = (
  <Router>
    <Route path="/" component={App}/>
  </Router>

);

export default Routes;

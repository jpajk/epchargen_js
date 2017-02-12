import React from 'react';
import {Router, Route} from 'react-router';

import Index from 'app/shared/components/Index';

const Routes = (
  <Router>
    <Route path="/" component={Index}/>
  </Router>

);

export default Routes;

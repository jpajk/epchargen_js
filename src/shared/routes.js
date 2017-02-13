import React from 'react';
import {Router, Route} from 'react-router';

import Index from 'app/shared/components/Pages/Index';
import Create from 'app/shared/components/Pages/Create';

//Debug only
if (typeof window != 'undefined' && typeof window.clog === 'undefined') {
    window.clog = (a) => {
        console.log(a);
    };
}

const Routes = (
  <Router>
    <Route path="/" component={Index}/>
    <Route path="/create" component={Create}/>
  </Router>

);

export default Routes;

import React from 'react';
import {Router, Route} from 'react-router';

import Index from 'app/shared/components/Pages/Index';
import Create from 'app/shared/components/Pages/Create';
import Register from 'app/shared/components/Pages/Register'

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
    <Route path="/register" component={Register} />
  </Router>

);

export default Routes;

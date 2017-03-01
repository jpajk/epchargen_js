import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Index from 'app/shared/components/Pages/Index';
import Create from 'app/shared/components/Pages/Create';
import Register from 'app/shared/components/Pages/Register'

//Debug only
if (typeof window != 'undefined' && typeof window.clog === 'undefined') {
    window.clog = (a) => {
        console.log(a);
    };
}

let Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Index}/>
        <Route path="/create" component={Create}/>
        <Route path="/register" component={Register} />
    </Router>
);

export default Routes;

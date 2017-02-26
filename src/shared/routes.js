import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Index from 'app/shared/components/Pages/Index';
import Create from 'app/shared/components/Pages/Create';
import Register from 'app/shared/components/Pages/Register'

import reducer from './reducers';

//Debug only
if (typeof window != 'undefined' && typeof window.clog === 'undefined') {
    window.clog = (a) => {
        console.log(a);
    };
}

const store = createStore(reducer);

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Index}/>
            <Route path="/create" component={Create}/>
            <Route path="/register" component={Register} />
        </Router>
    </Provider>
);

export default Routes;

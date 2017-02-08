/* eslint-env browser */
import ReactDOM from 'react-dom';
import {cloneElement} from 'react';
import {browserHistory} from 'react-router';

import routes from 'app/shared/routes';

import '../static/scss/skeleton.css';
import '../static/scss/index.scss';

const Router = cloneElement(routes, {
  history: browserHistory,
});

ReactDOM.render(Router, document.getElementById('app'));

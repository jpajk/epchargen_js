/* eslint-env node */
import express from 'express';
import {match, RouterContext} from 'react-router';

import Config from 'app/conf/Config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from 'app/shared/routes';

import models from '../models';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(Config.baseJsPath, express.static('lib/static/js'));
app.use(Config.baseImagePath, express.static('lib/static/img'));

/* todo: find out why webpack doesn't compile assets in certain cases */

app.use((req, res, unusedNext) => {
  match({
    routes,
    location: req.originalUrl,
  }, (error, redirectLocation, renderProps) => {
    const content = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>);
    res.render('index', {
      content,
      baseCssUrl: Config.baseCssUrl,
      baseJsUrl: Config.baseJsUrl,
    });
  });
});

models.sequelize.sync().then(() => {
    const server = app.listen(Config.appPort, () => {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Server listening at http://%s:%s', host, port);
    });
});
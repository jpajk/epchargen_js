/* eslint-env node */
import {match, RouterContext} from 'react-router';

import Config from 'app/conf/Config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from 'app/shared/routes';

import models from '../models';
import app from './express';

/* todo: find out why webpack doesn't compile assets in certain cases */

app.use((req, res, unusedNext) => {
  match({
    routes,
    location: req.originalUrl,
  }, (error, redirectLocation, renderProps) => {
      if (error) {
          res.status(500).send(error.message)
      } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
          const content = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>);
          res.render('index', {
              content,
              baseCssUrl: Config.baseCssUrl,
              baseJsUrl: Config.baseJsUrl,
          });
      } else {
          res.status(404).send('Not found')
      }
  });
});

models.sequelize.sync().then(() => {
    const server = app.listen(Config.appPort, () => {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Server listening at http://%s:%s', host, port);
    });
});
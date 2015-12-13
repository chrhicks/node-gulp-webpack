import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

import { routes } from './app/routes';

var appRoot = path.join(process.cwd());
var app = express();

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 7010;

app.set('view engine', 'hbs');
app.set('views', path.join(appRoot, 'app/views'));
app.use(express.static(path.join(appRoot, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(<RoutingContext {...props} />);
      res.render('index', { markup });
    } else {
      res.sendStatus(404);
    }
  });
});

app.listen(port, function() {
  process.stdout.write(`\nnode-gulp-webpack is running the ${env} environment on port ${port}\n\n`);
});

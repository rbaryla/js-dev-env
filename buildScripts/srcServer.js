/**
 * Created by rbaryla on 08.01.2017.
 */

import express                from 'express';
import path                   from 'path';
import open                   from 'open';
import webpack                from 'webpack';
import config                 from '../webpack.config.dev';
import webpackDevMiddleware   from 'webpack-dev-middleware';

/* eslint-disable no-console */

const port      = 3000;
const app       = express();
const compiler  = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smitch", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tommy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

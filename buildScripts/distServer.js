/**
 * Created by rbaryla on 08.01.2017.
 */

import express        from 'express';
import path           from 'path';
import open           from 'open';
import commpression   from 'compression';

/* eslint-disable no-console */

const port      = 3000;
const app       = express();

app.use(commpression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
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

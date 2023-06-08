const express = require('express');

const app = express();
//can also do the following => const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(400).send('Resource not found');
});

app.listen(5000, () => {
  console.log('server listening on 5000');
});

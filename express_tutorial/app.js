const app = require('express')();
const logger = require('./logger');

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log('Server listening on 5000');
});

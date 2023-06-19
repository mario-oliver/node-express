const app = require('express')();
const logger = require('./logger');

app.get('/', (req, res) => {
  res.send('Home');
});

//order does matter - root method will not utilize our logger middleware function, but the ones below will
app.use(logger);

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Home');
});

app.get('/api/items', (req, res) => {
  res.send('Home');
});

app.listen(5000, () => {
  console.log('Server listening on 5000');
});

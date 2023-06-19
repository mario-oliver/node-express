const app = require('express')();
const logger = require('./logger');

//order does matter - root method will not utilize our logger middleware function, but the ones below will
//can supply a url extension to tell the use() function what urls to attach the middleware to
app.use('/api', logger);

app.get('/', (req, res) => {
  res.send('Home');
});

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

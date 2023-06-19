const app = require('express')();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

// req => middleware => res

// 1. invoke two ways == use vs route
// 2. middleware options - 1) our own middleware OR 2) express's own middleware OR 3) third party middelware

//an example of express's middleware  is the "static" middleware function used previously to require all resources that are static in our webpage -> simple-server-static-website.js example
// app.use(express.static('./public'));

//an example of third party middleware is morgan -> https://www.npmjs.com/package/morgan
//reference docs for what tiny does
//in short it gives you the smallest bit of needed token code
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('Home');
});

app.get('/api/items', (req, res) => {
  res.send('Home');
});

app.listen(5000, () => {
  console.log('Server listening on 5000');
});

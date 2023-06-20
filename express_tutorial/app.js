const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

// static
app.use(express.static('./methods-public'));

//middleware to pase form data to put into the request response (otherwise we don't have access to form parameters)
//this is only for index.html that uses form action and form input to encode the name object
app.use(express.urlencoded({ extended: false }));

app.use('/login', auth);

//for handling json functionality in the request
//similar to urlencode express.json() gives us access to json data encoded in the http method
app.use(express.json());

//hre is the base url that will be use with the express router
app.use('/api/people', people);

app.listen(5000, () => {
  console.log('Server listening on 5000');
});

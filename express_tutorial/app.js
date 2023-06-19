const express = require('express');
const app = express();
let { people } = require('./data');

// static
app.use(express.static('./methods-public'));

//middleware to pase form data to put into the request response (otherwise we don't have access to form parameters)
//this is only for index.html that uses form action and form input to encode the name object
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  //uses express.urlencoded() middelware to access the req.body

  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  console.log(req.body);
  res.status(401).send('Please Provide Credentials');
});

//for handling json functionality in the request
//similar to urlencode express.json() gives us access to json data encoded in the http method
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, people: people });
});

app.post('/api/people', (req, res) => {
  //uses express.json() middelware to access the req.body
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
  console.log('Server listening on 5000');
});

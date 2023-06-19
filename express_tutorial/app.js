const express = require('express');
const app = express();
let { people } = require('./data');
const path = require('path');

// static
app.use(express.static('./methods-public'));

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, people: people });
});

app.listen(5000, () => {
  console.log('Server listening on 5000');
});

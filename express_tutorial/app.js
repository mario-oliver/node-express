const app = require('express')();

//we use the req function but don't pass it into the function
//express automatically supplies the req and res objects to middlewre
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getTime();
  console.log(method, url, time);
  next();
  // or --> res.send("Done");
  //when you work with middleware, you must pass the execution to the next middleware function (unless you are passing the result to the response object)
};

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log('Server listening on 5000');
});

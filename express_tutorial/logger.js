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

module.exports = logger;

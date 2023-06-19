/**
 * this is just an example and not the way to authorize users in prod
 * normally you'd get a webtoken and if provided and validated then you'd be authorize
 */
const authorize = (req, res, next) => {
  console.log('authorize init');

  const { user } = req.query;
  if (user === 'mario') {
    req.user = { name: 'mario', id: 3 };
    next();
  } else {
    res.status(401).send('unauthorized');
  }
  next();
};

module.exports = authorize;

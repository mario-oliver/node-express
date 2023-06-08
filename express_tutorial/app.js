const express = require('express');
const app = express();
const path = require('path');

//move resources of the navbar app into a new public folder
//static is a set of files that are not changing/dynamic
app.use(express.static('./public'));

app.get('/', (req, res) => {
  /**
   * to get back a webpage we'll use the following:
   * use path to get the path of the files of our website by using --> resolve()
   * then we'll pass the pathfile by:
   *         - resolving the path with path.resolve()
   *                  - node global object __dirname to get our server's directory
   *                  - and now within the server, pointing to the root of our websites (index.html)
   * One last thing is that we use sendFile() method not send
   * FYI could use path.join() with the same reoslving of the path (params)
   */
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(5000, () => {
  console.log('server listening');
});

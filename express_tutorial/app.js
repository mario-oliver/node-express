console.log('Express Tutorial');

const { readFileSync } = require('fs');
const http = require('http');

const homePage = readFileSync('./navbar-app/index.html');
const css = readFileSync('./navbar-app/styles.css');
const logo = readFileSync('./navbar-app/logo.svg');
const js = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(css);
    res.end();
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(logo);
    res.end();
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(js);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about</h1>');
    res.end();
  } else {
    res.writeHead(403, { 'content-type': 'text/html' });
    res.write('<h1>Error</h1>');
    res.end();
  }
});

server.listen(5000);

/** Writing a server that reads and writes files using promises*/
const http = require('http');
const fs = require('fs').promises;
const first = './content/first.txt';
const second = './content/second.txt';
const utf8 = 'utf8';

const server = http.createServer((req, res) => {
  console.log('request event');
  processFiles();
  res.end('Hello World');
});

const processFiles = async () => {
  const firstFile = await fs.readFile(first, utf8);
  const secondFile = await fs.readFile(second, utf8);
  log(`Reading first and second files:\n ${firstFile} :\n ${secondFile}`);
  fs.writeFile(
    './content/write-mind-grenade',
    firstFile + secondFile + 'complete'
  );
};

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
});

const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//this will just create the file even if it already exists
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`
);

//this write will append to whatever already exists
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } //to append, we pass this object with the flag variable set to 'a'
);

console.log('done with this task');
console.log('starting the next one');

//===== 02 GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

//===== 03 MODULES

//Common JS - every file is a module by default
//Modules - Encapsulated code (only share the minimun)
const names = require('./04-names');
console.log(module);
console.log(names);

console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000);

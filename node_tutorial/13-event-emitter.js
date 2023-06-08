const EventEmitter = require('events');
console.log('success');
const { log } = require('console');
const customEmitter = new EventEmitter();

//subscribe to the event with on
customEmitter.on('response', (name, id) => {
  log(`data received from user ${name} with id ${id}`);
});

//can have multiple logic subscribed to the event
customEmitter.on('response', () => {
  log(`other logic plugged to the same event `);
});

//once subscribed, you then emit it by passing the 'event' (with a string) that you subscribed to
customEmitter.emit('response', 'mario', 123);

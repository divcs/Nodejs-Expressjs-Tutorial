// whenever we want to execute some node script

// REPL stands for Read Evaluate Print Loop

const repl = require('repl')
//start node console
const local = repl.start('The node console started')

const dollar = repl.start('$')

// exit function on exiting
local.on('exit', () => {
  console.log('exiting REPL ')
  process.exit()
})

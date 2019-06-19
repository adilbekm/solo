const fs = require('fs')

// FIXME!!!
/**
 * This code is buggy! Your goal here is to let fix it. 
 * When the code runs, it should print out:
 * 
 * Hello World
 * <content of data.txt in human readable format>
 * Goodbye...
 * 
 * SPECS:
 * Your solution cannot include moving the console.log that prints "Goodbye..." 
 * into the callback function of readFile(...)
 * 
 * You may replace readFile(...) with a different function in your solution.
 * 
 */

console.log("Hello World")

fs.readFile('./data.txt', (err, data) => {
  if (err) throw err
  console.log(data)
})

console.log('Goodbye...')

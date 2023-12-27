// passsing arguments to a js file

// in terminal: nodepath filenamepath argument   ---> node argument.js name=divya

// console.log(process.argv)
// console.log(process.argv.slice(2)[0])

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`)
// })

//  terminal command to run this :node argument.js name=divya

// output:

// 0: C:\Program Files\nodejs\node.exe
// 1: E:\Programming\Node & Express\Nodejs-tutorial\argument.js
// 2: name=divya

// MINIMIST PACKAGE

const argNew = process.argv.slice(2)
console.log(argNew.name)

// either use this statement to get .env file configurations or use this statement in terminal: node -r dotenv/config env.js
require('dotenv').config()

console.log(process.env.NAME)
console.log(process.env.PROFESSION)
console.log("I'm starting a new series on", process.env.COURSE)

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var sumResult = notes.sum(9,-2);
console.log(sumResult);

// var user = os.userInfo();
// var userName = user.username;
// fs.appendFile('greetings.txt', `Hello ${userName}! You are ${notes.age}.`, function(err) {
//   if (err) {
//     console.log('Unable to write to file!');
//   }
// });


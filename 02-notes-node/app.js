console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Cotrim', 1, 'Cotrim', 1,2,3,2,4]);
console.log(filteredArray);

// var sumResult = notes.sum(9,-2);
// console.log(sumResult);

// console.log(_.isString(true));
// console.log(_.isString('Cotrim'));

// var user = os.userInfo();
// var userName = user.username;
// fs.appendFile('greetings.txt', `Hello ${userName}! You are ${notes.age}.`, function(err) {
//   if (err) {
//     console.log('Unable to write to file!');
//   }
// });


console.log('Starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
var userName = user.username;

fs.appendFile('greetings.txt', 'Hello ' + userName + '!', function(err) {
  if (err) {
    console.log('Unable to write to file!');
  }
});


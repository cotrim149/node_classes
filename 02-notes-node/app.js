console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command:',command);

console.log('Proccess:',process.argv);
console.log('Yargs:',argv);


switch(command) {
  case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
      console.log(`Note with Title:'${argv.title}' was alredy added!`);
    } else {
      console.log(`Note with\nTitle:${note.title}\nBody:${note.body}\nAdded with success!`);
    }
    break;
  case 'list':
    notes.getAll();
    break;
  case 'read':
    notes.readNote(argv.title);
    break;
  case 'remove':
    notes.removeNote(argv.title);
    break;
  default:
    console.log('Command not found!')
    break;
}

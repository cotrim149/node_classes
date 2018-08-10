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
    notes.logNote(note);
    break;
  case 'list':
    var allNotes = notes.getAll(); 

    console.log(`Printing ${allNotes.length} note(s)`);

    allNotes.forEach((note) => notes.logNote(note));    
    break;
  case 'read':
    var note = notes.readNote(argv.title);
    notes.logNote(note);
    break;
  case 'remove':
    var wasNoteRemoved = notes.removeNote(argv.title);

    if (wasNoteRemoved) {
      console.log(`Note with title: '${argv.title}' was removed with success!`);
    } else {
      console.log(`Note with title: '${argv.title}' was not found!`);
    }

    break;
  default:
    console.log('Command not found!')
    break;
}

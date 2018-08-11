const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var addStringOptions = (describe, demand, alias) => {
  return {
    describe: describe,
    demand: demand,
    alias: alias
  };
};

var argv = yargs
  .command('add', 'Add a new note', {
    title: addStringOptions('Title of a note', true, 't'),
    body: addStringOptions('Body of a note', true, 'b')
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: addStringOptions('Title of a note', true, 't'),
  })
  .command('remove', 'Remove a specific note', {
    title: addStringOptions('Title of a note', true, 't')
  })
  .help()
  .argv;
var command = argv._[0];

switch(command) {
  case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
      notes.logNote(note);
    } else {
      console.log('Note cannot be add!');
    }
    break;
  case 'list':
    var allNotes = notes.getAll(); 

    console.log(`Printing ${allNotes.length} note(s)`);

    allNotes.forEach((note) => notes.logNote(note));    
    break;
  case 'read':
    var note = notes.readNote(argv.title);

    if(note) {
      notes.logNote(note);
    } else {
      console.log('Note not found!');
    }

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

console.log('Starting notes.js');

const fs = require('fs');


var fetchNotes = () => {
  try{
    // fetching data from notes-data.json
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  return fetchNotes();
};

var readNote = (title) => {
  var notes = fetchNotes();
  var foundNote = notes.filter((note) => note.title === title);
  return foundNote[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  
  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {

  if (note) {
    console.log('\n --- \n');
    console.log('Title: '+ note.title);
    console.log('Body: '+ note.body);
    console.log('\n --- \n');
  } else {
    console.log('Note not found');
  }
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote,
};
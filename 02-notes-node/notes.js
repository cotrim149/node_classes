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
  console.log('Getting all notes');
};

var readNote = (title) => {
  console.log('Reading note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
};
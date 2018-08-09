console.log('Starting notes.js');

const fs = require('fs');


var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  console.log(note);
  try{
    // fetching data from notes-data.json
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    console.log(notes);
  } catch (error) {
  
  }
  
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));  
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
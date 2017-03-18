console.log('starting notes.js');
const fs = require('fs');

var fetchNotes = () =>{
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
   
    } catch (e){
        return [];
    }
};

var saveNotes = (notes) =>{
fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) =>{
var notes = fetchNotes();
var note = {
    title,
    body
}; 
var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};


var getAll = ()=>{
console.log('getting all notes');
};

var getNote = (title) =>{
var notes = fetchNotes();
var noteFound = notes.filter((note) => note.title === title);
// console.log(noteFound);
return noteFound[0];
};

var remove = (title)=>{
var notes =fetchNotes();
//filter notes removing the one with the title argument
var UpdNotes = notes.filter((note)=>note.title !== title);
//save updated notes 
saveNotes(UpdNotes);

return notes.length !== UpdNotes.length;   
};
var logNote = (note)=>{
    console.log(`-----\nTitle: ${note.title}\nBody:${note.body}`);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
    logNote

};
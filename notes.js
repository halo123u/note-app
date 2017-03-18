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
var duplicateNotes = notes.filter((note)=>note.title === title);

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
console.log(`getting ${title}`);
};

var remove = (title)=>{
var notes =fetchNotes();
//filter notes removing the one with the title argument
var UpdNotes = notes.filter((note)=>note.title !== title);
//save updated notes 
saveNotes(UpdNotes);

return notes.length !== UpdNotes.length;   
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove

};
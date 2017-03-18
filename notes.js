const fs = require('fs');

//Retrieves the Notes from the notes-data.json file
//if not Found return an empty array to store new data
var fetchNotes = () =>{
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
   
    } catch (e){
        return [];
    }
};

//Save the notes to notes-data.json
var saveNotes = (notes) =>{
fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//Save a single note to the file and check for duplicates titles
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

//Return all of the notes available
var getAll = ()=>{
 return fetchNotes();
};

//Returns the note with the title passed
//if not found return undefined 
var getNote = (title) =>{
var notes = fetchNotes();

var noteFound = notes.filter((note) => note.title === title);
return noteFound[0];
};

//Remove note associated with the title passed
var remove = (title)=>{
var notes =fetchNotes();

var UpdNotes = notes.filter((note)=>note.title !== title); 
saveNotes(UpdNotes);

return notes.length !== UpdNotes.length;   
};

//Utility function to print out the contents of the note
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
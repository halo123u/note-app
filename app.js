const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(note){
       console.log(`The note was saved successfully`);
       notes.logNote(note); 
   } else {
       console.log("The title of the note already exists. Please try a different title to save your note");
   }

} else if (command === 'list'){
    
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));

} else if(command === 'read'){
    
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Note Found")
        notes.logNote(note);
    } else {
        console.log("Note was not found!");
    }

} else if(command === 'remove'){
    
    var noteRemoved = notes.remove(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    
    console.log('Command not recognized');

}

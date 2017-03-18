console.log('starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
// console.log('Command:', command);
// console.log('Yargs:',argv);

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(note){
       console.log(`The note was saved successfully\n
       Title: ${note.title}
       Body: ${note.body}`); 
   } else {
       console.log("The title of the note already exists. Please try a different title to save your note");
   }
} else if (command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    notes.getNote(argv.title);
} else if(command === 'remove'){
   var noteRemoved = notes.remove(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
} else {
    console.log('Command not recognized');
}

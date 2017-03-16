console.log('starting notes.js');

var addNote = (title, body) =>{
console.log('adding note', title,body);
};
var getAll = ()=>{
console.log('getting all notes');
};
var getNote = (title) =>{
console.log(`getting ${title}`);
};
var remove = (title)=>{
    console.log(`Removing ${title}`)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove

};
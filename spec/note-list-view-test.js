function objectExists() {
  var describe = 'NoteListView: note-list-view object exists!';
  var noteListView = new NoteListView();
  assert.isTrue(describe, noteListView instanceof NoteListView);
};

objectExists();

// function returnsAddedNote() {
//   var describe  = "note has been added";
//   var noteList = new NoteList();
//   noteList.addNote('new note');
//   assert.isTrue(describe, noteList.list()[0] instanceof Note);
// };
//
// returnsAddedNote();
//
//
// function displayeachNote() {
//   var noteList = new NoteList();
//   var describe = 'display each note'
//   noteList.addNote('new note');
//   assert.isEqual(describe, noteList.viewNotes()._text, 'new note');
// };
//
// displayeachNote();

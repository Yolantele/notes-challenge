function objectExists() {
  var describe = 'NoteList: Note-list object exists!';
  var noteList = new NoteList();
  assert.isTrue(describe, noteList instanceof NoteList);
};

objectExists();

function returnsAddedNote() {
  var describe  = "#addNote: Note has been added";
  var noteList = new NoteList();
  assert.isTrue(describe, noteList.addNote('new note') === 1);
};

returnsAddedNote();

function returnsArrayWithNote() {
  var describe1  = "#list: first note in listis instance of note";
  var describe2  = "#list: note with text is in the list";
  var noteList   = new NoteList();
  noteList.addNote('new note');
  assert.isTrue(describe1, noteList.list()[0] instanceof Note);
  assert.isEqual(describe2, noteList.list()[0]._text, 'new note');

};

returnsArrayWithNote();

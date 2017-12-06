function NoteDouble(text) {
};

function objectExists() {
  var describe = 'NoteList: Note-list object exists!';
  var noteList = new NoteList(NoteDouble);
  assert.isTrue(describe, noteList instanceof NoteList);
};

objectExists();

function returnsAddedNote() {
  var describe  = "#addNote: Note has been added";
  var noteList = new NoteList(NoteDouble);
  assert.isTrue(describe, noteList.addNote('new note') === 1);
};

returnsAddedNote();

function returnsArrayWithNote() {
  var describe1  = "#list: first note in listis instance of note";
  var describe2  = "#list: note with text is in the list";
  var noteList   = new NoteList(NoteDouble);
  noteList.addNote('new note');
  assert.isTrue(describe1, noteList.list()[0] instanceof NoteDouble);
  // assert.isEqual(describe2, noteList.list()[0].text(), 'new note');

};

returnsArrayWithNote();

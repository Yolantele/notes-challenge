function NoteDouble(text, id) {
  this._text = text;
  this._id = id;
  NoteDouble.prototype.text = function() {
    return this._text;
  }
  NoteDouble.prototype.id = function() {
    return this._id;
  }
};
function NoteListDouble(array) {
  this._list = array
  NoteListDouble.prototype.list = function() {
    return this._list;
  }
};


function objectExists() {
  var describe = 'NoteListView: note-list-view object exists!';
  var noteListView = new NoteListView();
  assert.isTrue(describe, noteListView instanceof NoteListView);
};

objectExists();

function returnsHtml() {
  var describe  = "Returns html string";
  var noteList = new NoteListDouble([new NoteDouble('new note', 0), new NoteDouble('new note 1', 1), new NoteDouble('new note 2', 2)]);
  var view = new NoteListView(noteList);
  var htmlString = '<ul><li><div><a href="#notes/0">new note</a></div></li><li><div><a href="#notes/1">new note 1</a></div></li><li><div><a href="#notes/2">new note 2</a></div></li></ul>'
  assert.isEqual(describe, view.render(), htmlString );
};
returnsHtml();

function returnsHtmlwithOneNote() {
  var describe  = "Returns html string with one note";
  var noteList = new NoteListDouble([new NoteDouble('new note', 0)]);
  var view = new NoteListView(noteList);
  var htmlString = '<ul><li><div><a href="#notes/0">new note</a></div></li></ul>'
  assert.isEqual(describe, view.render(), htmlString );
};
returnsHtmlwithOneNote()

function returnsHtmlwithNoNotes() {
  var describe  = "Returns html string with no notes";
  var noteList = new NoteListDouble([]);
  var view = new NoteListView(noteList);
  var htmlString = '<ul></ul>'
  assert.isEqual(describe, view.render(), htmlString );

};
returnsHtmlwithNoNotes()

function returnsHtmlWithShortenedNote() {
  var describe  = "Returns html string with shortened note";
  var noteList = new NoteListDouble([new NoteDouble('12345678901011121314151617181920', 0)]);
  var view = new NoteListView(noteList);
  var htmlString = '<ul><li><div><a href="#notes/0">12345678901011121314...</a></div></li></ul>'
  assert.isEqual(describe, view.render(), htmlString );
};
returnsHtmlWithShortenedNote()

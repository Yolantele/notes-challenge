function NoteDouble(text) {
  this._text = text;
  NoteDouble.prototype.text = function() {
    return this._text;
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
  var noteList = new NoteListDouble([new NoteDouble('new note'), new NoteDouble('new note 1'), new NoteDouble('new note 2')]);
  var view = new NoteListView(noteList);
  var htmlString = "<ul><li><div>new note</div></li><li><div>new note 1</div></li><li><div>new note 2</div></li></ul>"
  assert.isEqual(describe, view.render(), htmlString );
};
returnsHtml();

function returnsHtmlwithOneNote() {
  var describe  = "Returns html string with one note";
  var noteList = new NoteListDouble([new NoteDouble('new note')]);
  var view = new NoteListView(noteList);
  var htmlString = "<ul><li><div>new note</div></li></ul>"
  assert.isEqual(describe, view.render(), htmlString );
};
returnsHtmlwithOneNote()

function returnsHtmlwithNoNotes() {
  var describe  = "Returns html string with no notes";
  var noteList = new NoteListDouble([]);
  var view = new NoteListView(noteList);
  var htmlString = "<ul></ul>"
  assert.isEqual(describe, view.render(), htmlString );

};
returnsHtmlwithNoNotes()

function returnsHtmlWithShortenedNote() {
  var describe  = "Returns html string with shortened note";
  var noteList = new NoteListDouble([new NoteDouble('12345678901011121314151617181920')]);
  var view = new NoteListView(noteList);
  var htmlString = "<ul><li><div>12345678901011121314...</div></li></ul>"
  console.log(view.render()) 
  assert.isEqual(describe, view.render(), htmlString );
};
returnsHtmlWithShortenedNote()

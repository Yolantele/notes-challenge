function NoteListDouble() {}
NoteListDouble.prototype.addNote = function (argument) {};

function NoteListViewDouble(noteListDouble) {}
NoteListViewDouble.prototype.render = function () {
  return '<ul><li><div>Favourite drink: seltzer</div></li><li><div>Favourite show: sitcom</div></li></ul>';
};

function insertsHTMLIntoDiv() {
  var noteController = new NoteController(new NoteListDouble, NoteListViewDouble);
  noteController.insertHTML();
  var describe = "Note controller inserts html into div";
  var div = document.getElementById('app').innerHTML;
  var HTMLstring = '<ul><li><div>Favourite drink: seltzer</div></li><li><div>Favourite show: sitcom</div></li></ul>';
  assert.isEqual(describe, div, HTMLstring);
}


insertsHTMLIntoDiv();

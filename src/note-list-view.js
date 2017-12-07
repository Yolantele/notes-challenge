(function(exports) {
function NoteListView(noteList) {
  this._noteList = noteList;
};

NoteListView.prototype.render = function() {
  var htmlString = ""
  this._noteList.list().forEach(function(note){
    if (note.text().length > 20) {
      htmlString += `<li><div><a href="#notes/${note.id()}">${note.text().slice(0,20)}...</a></div></li>`
    } else {
      htmlString += `<li><div><a href="#notes/${note.id()}">${note.text()}</a></div></li>`
    }
  });
  return (`<ul>${htmlString}</ul>`)
};

exports.NoteListView = NoteListView;
})(this);

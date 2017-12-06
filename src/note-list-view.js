(function(exports) {
function NoteListView(noteList) {
  this._noteList = noteList;
};

NoteListView.prototype.render = function() {
  var htmlString = ""
  this._noteList.list().forEach(function(note){
    if (note.text().length > 20) {
      htmlString += `<li><div>${note.text().slice(0,20)}...</div></li>`
    } else {
      htmlString += `<li><div>${note.text()}</div></li>`
    }
  });
  return (`<ul>${htmlString}</ul>`)
};

exports.NoteListView = NoteListView;
})(this);

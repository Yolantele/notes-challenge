(function(exports) {
function NoteList() {
  this._list = [];
};

NoteList.prototype.list = function() {
  return this._list;
};

NoteList.prototype.addNote = function(note) {
return this._list.push(new Note(note));
};

exports.NoteList = NoteList;
})(this);

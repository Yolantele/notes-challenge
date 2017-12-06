(function(exports) {
function NoteList(note) {
  this._list = [];
  this._note = note;
};

NoteList.prototype.list = function() {
  return this._list;
};

NoteList.prototype.addNote = function(text) {
return this._list.push( new this._note(text));
};

exports.NoteList = NoteList;
})(this);

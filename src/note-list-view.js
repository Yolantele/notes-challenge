(function(exports) {
function NoteListView(noteList) {
  this._view = noteList;
};

NoteListView.prototype.view = function() {
  return this._view;
};
exports.NoteListView = NoteListView;
})(this);

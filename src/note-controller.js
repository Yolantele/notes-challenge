(function(exports) {
  var appDiv = document.getElementById('app');

  function NoteController(noteList, noteListView) {
    this._noteList = noteList
    this._noteList.addNote('Favourite drink: seltzer');
    this._noteListView = new noteListView(this._noteList);
  }

  NoteController.prototype.insertHTML = function () {
    appDiv.innerHTML = this._noteListView.render();
  };

  exports.NoteController = NoteController;
})(this);

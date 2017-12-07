(function(exports) {
  var appDiv = document.getElementById('app');

  function NoteController(noteList, noteListView, singleNoteView) {
    this._noteList = noteList
    this._noteList.addNote('Favourite drink: seltzer');
    this._noteList.addNote('Favourite food: hot dog');
    this._noteList.addNote('Favourite singer: Britney Spears');
    this._noteListView = new noteListView(this._noteList);
    this._singleNoteView = singleNoteView;
  }

  NoteController.prototype.insertHTML = function () {
    appDiv.innerHTML = this._noteListView.render();
  };

  NoteController.prototype.addingEventListener = function () {
    var that = this;
    window.addEventListener("hashchange", function() {
      var id = window.location.hash.split('/')[1];
      var selectedNote = that._noteList.list().filter(function(item) {
        return item._id == id;
      })[0];
      var singleNote = new that._singleNoteView(selectedNote);
      appDiv.innerHTML = singleNote.render();
    })
  };

  exports.NoteController = NoteController;
})(this);

var noteController = new NoteController(new NoteList(Note), NoteListView, SingleNoteView);
noteController.insertHTML();
noteController.addingEventListener();

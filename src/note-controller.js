(function(exports) {
  var appDiv = document.getElementById('app');

  function NoteController(noteList, noteListView, singleNoteView) {
    this._noteList = noteList
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

  NoteController.prototype.catchSubmit = function () {
    var that = this;
    var form = document.getElementById('text')
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var noteText = event.srcElement.innerText;
      that._noteList.addNote(noteText);
      appDiv.innerHTML = that._noteListView.render();
    })
  }

  exports.NoteController = NoteController;
})(this);

var noteController = new NoteController(new NoteList(Note), NoteListView, SingleNoteView);
noteController.insertHTML();
noteController.addingEventListener();
noteController.catchSubmit();

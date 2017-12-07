(function(exports) {

  var id = 0;

  function reset() {
    id = 0;
  }

  function Note(text) {
    this._text = text;
    this._id = id;
    id++;
  };

  Note.prototype.text = function() {
    return this._text;
  };

  Note.prototype.id = function () {
    return this._id;
  };

  exports.Note = Note;
  exports.reset = reset;
})(this);

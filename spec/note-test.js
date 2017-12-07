function newNoteHasIdOfZero() {
  reset();
  var describe = 'New Note has ID of 0';
  var note = new Note('note 1');
  assert.isEqual(describe, note.id(), 0);
}

newNoteHasIdOfZero();

function secondNoteHasIdOfOne() {
  reset();
  var describe = 'Second Note has ID of 1';
  var note = new Note('note 1');
  var note2 = new Note('note 2');
  assert.isEqual(describe, note2.id(), 1);
}

secondNoteHasIdOfOne()

function textMethod() {
  var describe = '#text: text method returns a note text';
  var note = new Note('Hey, I built my own tests');
  assert.isTrue(describe, note.text() === 'Hey, I built my own tests');
};

textMethod()

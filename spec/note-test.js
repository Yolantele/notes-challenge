function objectExists() {
  var describe = 'Note: note object exists!';
  var note = new Note('Hey, I built my own tests');
  assert.isTrue(describe, note instanceof Note);
};

function textMethod() {
  var describe = '#text: text method returns a note text';
  var note = new Note('Hey, I built my own tests');
  assert.isTrue(describe, note.text() === 'Hey, I built my own tests');
};

objectExists();
textMethod();

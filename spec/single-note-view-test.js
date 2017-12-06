function returnsHtmlString() {
  var singleNoteView = new SingleNoteView(new Note("test note"));
  var describe = 'Returns a single note html string'
  var htmlString = "<div>test note</div>"
  assert.isEqual(describe, singleNoteView.render(), htmlString )
};
returnsHtmlString();

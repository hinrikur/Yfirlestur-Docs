const referenceJson = {
  sent:
    'betra væri að setja stórfelldar afléttingar í kælir fram yfir Páska en búist er við umtalsverðum fólksferðum innanlands yfir helgina.',
  nonce: 14607647,
  code: 'Z001',
  start: 10.0,
  suggest: 'páska',
  end: 10.0,
  text: 'Orð á að byrja á lágstaf: Páska',
  detail: null,
  start_char: 175.0,
  token: '667f3abf11d8a22bdc036045519edd44e22acb784d46a650ba9363428d5b3ea9',
  end_char: 180.0,
};

function annotator() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const rangeBuilder = doc.newRange();
  // var locs = getAnnotatedLocations(referenceJson);
  const startOffset = referenceJson.start_char;
  const endOffset = referenceJson.end_char;
  // var originalText = referenceJson.
  const suggestion = referenceJson.suggest;
  Logger.log(typeof startOffset);
  Logger.log(typeof endOffset);

  //   rangeBuilder.addElement(suggestion, startOffset, endOffset);
  //   doc.setSelection(rangeBuilder.build());
}

function getAnnotatedLocations(singleAnnotation) {
  const start = singleAnnotation.start_char;
  const end = singleAnnotation.end_char;
  return { start, end };
}

export default function highlightAnnotation() {
  const doc = DocumentApp.getActiveDocument();
  const rangeBuilder = doc.newRange();
  doc.setSelection(rangeBuilder.build());
}

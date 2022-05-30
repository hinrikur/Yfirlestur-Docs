function alignStartOffset(start, end, parString, original) {
  console.log(start, end);
  console.log(parString.slice(start, end));
  console.log(original);
  if (parString.slice(start, end).startsWith(original) || start === end) {
    return start;
  }
  return alignStartOffset(start + 1, end, parString, original);
}

export function validateSelection(start, end, parString, original) {
  const parLength = String(parString).length;
  console.log(parLength);
  let newStart = start;
  let newEnd = end;
  console.log(newEnd);

  if (
    parString.slice(start, end - 1) !== original &&
    parString.slice(start, end) !== original
  ) {
    const tmpStart = start - 10 >= 0 ? start - 10 : 0;
    const tmpEnd = end + 10 <= parLength ? end + 10 : parLength;
    console.log(tmpEnd);
    newStart = alignStartOffset(tmpStart, tmpEnd, parString, original);
    newEnd = newStart + original.length;
  }
  return [newStart, newEnd];
}

export function replaceWord(
  correct,
  startOffset,
  endOffset,
  parIndex,
  original
) {
  const doc = DocumentApp.getActiveDocument();
  const parToEdit = doc.getBody().getChild(parIndex);
  const parText = parToEdit.editAsText();
  const validatedOffsets = validateSelection(
    startOffset,
    endOffset,
    parText.getText(),
    original,
    correct
  );
  const start = validatedOffsets[0];
  const end = validatedOffsets[1] - 1;
  parText.deleteText(start, end);
  parText.insertText(start, correct);
}

export function highlightWord(startOffset, endOffset, parIndex, original) {
  const doc = DocumentApp.getActiveDocument();
  const currentPar = doc.getBody().getChild(parIndex);
  const parText = currentPar.editAsText();
  const validatedOffsets = validateSelection(
    startOffset,
    endOffset,
    parText.getText(),
    original
  );
  const start = validatedOffsets[0];
  const end = validatedOffsets[1] - 1;
  const rangeBuilder = doc.newRange();
  rangeBuilder.addElement(parText, start, end);
  doc.setSelection(rangeBuilder.build());
}

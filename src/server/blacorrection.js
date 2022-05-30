// import 'google-apps-script';

/**
 * @OnlyCurrentDoc
 *
 * The above comment directs Apps Script to limit the scope of file
 * access for this add-on. It specifies that this add-on will only
 * attempt to read or modify the files in which the add-on is used,
 * and not all of the user's files. The authorization request message
 * presented to users will reflect this limited scope.
 */

/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onOpen trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode.
 */
// function onOpen(e) {
//   DocumentApp.getUi()
//     .createMenu('Yfirlestur')
//     .addItem('Kveikja á yfirlestri', 'startCorrection')
//     .addItem('Lesa yfir skjal', 'showSidebar')
//     .addToUi();
// }

/**
 * Runs when the add-on is installed.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 */
function showSidebar() {
  const ui = DocumentApp.getUi();
  const tmp = HtmlService.createTemplateFromFile('sidebar');
  // tmp.correctedText = getCorrected();
  // tmp.docText = docText()

  const html = tmp.evaluate();
  html.setTitle('Yfirlestur');

  ui.showSidebar(html);
}

// function onSelectionChange(e) {
//   // Set background to red if a single empty cell is selected.
//   const range = e.range;
//   if (
//     range.getNumRows() === 1 &&
//     range.getNumColumns() === 1 &&
//     range.getCell(1, 1).getValue() === ''
//   ) {
//     range.setBackground('red');
//   }
// }

// function highlightAnnotated(annotated)
// {

//   var highlightStyle = {};
//   highlightStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#FF0000';
//   var paras = doc.getParagraphs();
//   var textLocation = {};
//   var i;

//   for (i=0; i<paras.length; ++i) {
//     textLocation = paras[i].findText(textToHighlight);
//     if (textLocation != null && textLocation.getStartOffset() != -1) {
//       textLocation.getElement().setAttributes(textLocation.getStartOffset(),textLocation.getEndOffsetInclusive(), highlightStyle);
//     }
//   }
// }

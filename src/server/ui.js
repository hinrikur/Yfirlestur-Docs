export function onOpen(e) {
  DocumentApp.getUi()
    .createMenu('Yfirlestur')
    .addItem('Lesa yfir skjal', 'showSidebar')
    .addToUi();
}

export function showSidebar() {
  const ui = DocumentApp.getUi();
  const tmp = HtmlService.createTemplateFromFile('sidebar');
  // tmp.correctedText = getCorrected();
  // tmp.docText = docText()

  const html = tmp.evaluate();
  html.setTitle('Yfirlestur');

  ui.showSidebar(html);
}

export function onInstall(e) {
  onOpen(e);
}

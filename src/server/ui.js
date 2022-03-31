export function onOpen(e) {
  DocumentApp.getUi()
    .createMenu('Yfirlestur')
    .addItem('Kveikja á yfirlestri', 'startCorrection')
    .addItem('Valmynd', 'showSidebar')
    .addToUi();
}

// export const openDialog = () => {
//   const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
//     .setWidth(600)
//     .setHeight(600);
//   DocumentApp.getUi().showModalDialog(html, 'Sheet Editor');
// };

// export const openDialogBootstrap = () => {
//   const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
//     .setWidth(600)
//     .setHeight(600);
//   DocumentApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
// };

export const showSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar').setTitle(
    'Yfirlestur'
  );
  DocumentApp.getUi().showSidebar(html);
};

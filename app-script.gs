function doPost(e) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  var newRow = sheet.getLastRow() + 1;
  var rowData = [];

  rowData[0] = new Date();
  rowData[1] = e.parameter.name;
  rowData[2] = e.parameter.email;
  rowData[3] = e.parameter.message;

  sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
  return ContentService.createTextOutput("Data has been saved");
}

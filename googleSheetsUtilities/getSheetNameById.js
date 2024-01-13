/*

This script reads a Google Spreadsheet (AKA workbook)
and returns the name of a sheet within the spreadsheet

This is useful when the name of a sheet (a sheet within a spreadsheet) may change. If we
identify the sheet and spreadsheet by their ID's and pull the name currently present for
the ID the robustness of the spreadsheet is sustained through user changes

Created by Chris Owen Jan 13 2024

*/

// TODO Implement IIFE pattern

function getSheetNameById(spreadSheetId,sheetId) {
  var sheets = SpreadsheetApp.openById(spreadSheetId).getSheets();
  return sheets.filter(function(sheet) {
      return sheet.getSheetId() == sheetId;
    })[0].getName();
};
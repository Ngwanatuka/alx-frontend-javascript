/* eslint-disable @typescript-eslint/explicit-function-return-type */
// crud.js

function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  function deleteRow(rowId) {
    console.log('Delete row id', rowId);
  }
  
  function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
    return rowId;
  }
  
  module.exports = {
    insertRow,
    deleteRow,
    updateRow,
  };
  
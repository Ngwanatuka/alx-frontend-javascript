"use strict";
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var obj = { firstName: "Guillaume", lastName: "Salva" };
var newRowID = CRUD.insertRow(obj);
// Insert row {firstName: "Guillaume", lastName: "Salva"}
var updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
CRUD.deleteRow(newRowID);
// Delete row id 125

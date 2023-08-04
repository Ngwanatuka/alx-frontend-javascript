"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cpp_1 = require("./subjects/Cpp");
var Java_1 = require("./subjects/Java");
var React_1 = require("./subjects/React");
// Create constants for each subject
var cpp = new Cpp_1.Cpp();
var java = new Java_1.Java();
var react = new React_1.React();
// Create a Teacher object with experienceTeachingC = 10
var cTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};
// For Cpp subject
cpp.setTeacher(cTeacher);
console.log("Cpp:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// For Java subject
java.setTeacher(cTeacher);
console.log("Java:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// For React subject
react.setTeacher(cTeacher);
console.log("React:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

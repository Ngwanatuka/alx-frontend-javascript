import { Subjects } from './subjects/Subjects';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create constants for each subject
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Create a Teacher object with experienceTeachingC = 10
const cTeacher: Subjects.Teacher = {
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

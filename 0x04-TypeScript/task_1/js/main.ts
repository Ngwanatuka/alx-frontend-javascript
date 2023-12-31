/* eslint-disable @typescript-eslint/class-name-casing */
class Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;

    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
    }

    toString(): string {
        return `Object\n${JSON.stringify(this, null, 2)}`;
    }
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "London",
    numberOfReports: 17,
};

console.log(director1);

const teacher3 = new Teacher("John", "Doe", false, "London");

console.log(teacher3.toString());

// Define the function
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstLetter}. ${formattedLastName}`;
}

// Define the interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Test the function
console.log(printTeacher("John", "Doe"));

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student1 = new StudentClass({ firstName: "Alice", lastName: "Johnson" });

console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName());    // Output: Alice


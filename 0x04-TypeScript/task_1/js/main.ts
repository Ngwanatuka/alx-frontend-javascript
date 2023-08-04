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

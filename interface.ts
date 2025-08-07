/**
 * Interface `User` defines the shape of a user object.
 * It includes required properties `name` and `age`,
 * and an optional property `email`.
 */
interface User {
    name: string;       // User's name
    age: number;        // User's age
    email?: string;     // Optional email address
}

/**
 * A single user object that follows the `User` interface structure.
 */
let student: User = {
    name: "vivek",
    age: 22
};

/**
 * An array of user objects, each adhering to the `User` interface.
 * Demonstrates how to define and manage multiple users.
 */
let students: User[] = [
    {
        name: 'Harsh',
        age: 21
    },
    {
        name: 'prit',
        age: 22
    }
];

// Output the single user object to the console.
console.log(student);

// Output the array of user objects to the console.
console.log(students);

// ================================
// Arrays in TypeScript with Types
// ================================

// ----------------------------------
// 1. Array of Strings
// ----------------------------------

// Declare an array named 'languages' which can only contain string values
const languages: string[] = ["c++", "python", "java"];

// Print the array of programming languages
console.log("Languages:", languages);


// ----------------------------------
// 2. Array of Numbers
// ----------------------------------

// Declare an array named 'marks' which can only contain numbers
const marks: number[] = [19, 11, 18, 10];

// Print the array of marks
console.log("Marks:", marks);


// ----------------------------------
// 3. Array of Objects
// ----------------------------------

// Declare an array named 'users' where each object must have:
// - 'id' as a number
// - 'name' as a string
const users: { id: number; name: string }[] = [
    { id: 1, name: 'vivek' },
    { id: 2, name: 'rohit' }
];

// Print the array of user objects
console.log("Users:", users);

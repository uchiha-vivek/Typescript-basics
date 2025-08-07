// Define an interface to specify the structure of a 'User' object
interface User {
  name: string;          // User's name (required)
  age: number;           // User's age (required)
  email?: string;        // User's email (optional, indicated by '?')
}

/**
 * A function that takes a 'User' object and returns a greeting message.
 * @param user - The user object conforming to the 'User' interface.
 * @returns A string greeting the user with their name and age.
 */
function greet(user: User): string {
  return `My name is ${user.name} and age is ${user.age}`;
}

// Create a 'User' object with required fields 'name' and 'age'
const vivek: User = {
  name: "vivek",
  age: 22
};

// Call the greet function and log the returned message
console.log(greet(vivek));

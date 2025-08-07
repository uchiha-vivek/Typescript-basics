// ============================================
// Union Types in TypeScript
// Useful when a variable can hold more than one type (e.g., string OR number)
// ============================================

// Example 1: UUID can be a string or a number
let uuid: string | number = "vivek12";
console.log("UUID (string):", uuid);

uuid = 123456;  // valid because it's a number
console.log("UUID (number):", uuid);

// Example 2: Score can be a number or the string 'N/A'
let score: number | string = 95;
console.log("Score (number):", score);

score = "N/A";  // valid because it's a string
console.log("Score (string):", score);

// Example 3: Flexible user input can be a string (username) or number (user ID)
let userInput: string | number;
userInput = "admin_user";
console.log("User input (username):", userInput);

userInput = 1001;
console.log("User input (user ID):", userInput);

// Example 4: A flag that could be either boolean or string for more descriptive state
let isVerified: boolean | string = true;
console.log("Is verified (boolean):", isVerified);

isVerified = "pending";
console.log("Is verified (string):", isVerified);

// ============================================
// Union types allow flexibility but still enforce type safety
// You can only use methods valid for both types or add type checks before usage
// ============================================


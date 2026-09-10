//String methods are built-in functions that allow you to manipulate and work with strings in javascript.

let str=" parv shah ";

console.log(str.toUpperCase()); // Converts the string to uppercase letters. Output: " PARV SHAH "
console.log(str.toLowerCase()); // Converts the string to lowercase letters. Output: " parv shah "
console.log(str.trim()); // Removes whitespace from both ends of the string. Output: "parv shah"
console.log(str.length); // Returns the length of the string. Output: 11
console.log(str.charAt(2)); // Returns the character at the specified index. Output: "r"
console.log(str.slice(1, 5)); // Extracts a section of the string and returns it as a new string. Output: "parv"
console.log(str.replace("parv", "john")); // Replaces a specified value with another value in the string. Output: " john shah " 
// string is a sequence of characters used to represent text. In JavaScript, strings are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones.

let obj={
    item : " pen",
    price : 10
};

let output = ` The cost of ${obj.item} is ${obj.price} rupees.`; // Template literals allow for embedding expressions inside string literals using `${}` syntax.

console.log(output); // The cost of pen is 10 rupees.
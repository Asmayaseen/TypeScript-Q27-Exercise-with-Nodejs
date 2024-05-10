// define veriables
let apple = "apple";
let uppercaseapple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["apple","orange","banana"];

// test for inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");

// tests using lowercase function
console.log("\nis Apple is equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("\nis Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");

// numerical tests
// equals to
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\nis ten is not equal to twenty?");
console.log(ten != twenty);

//greater than
console.log("\n ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("\n is twenty is less than 10?");
console.log(twenty < 10);

// greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equal to
console.log("\nis twenty is less than or equal to 10?");
console.log(twenty <= 10);

// tests using "and" & "or" operators

// using &&(and)
console.log("\nis twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 ==20);

console.log("\n 20 is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);

// tests wheather an item is include in array
console.log("\nis orange include in my fruits array");
console.log(fruits.includes("orange"));

// not include
console.log("\n is orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
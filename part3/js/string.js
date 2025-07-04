// file: strings.js
// desc: This file shows strings and string methods
// Author: Amina Aar
// Last modified: 20/05/2025
// version 1.0.0

// Defining varias strings
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Amina";

// ouputing strings
console.log(
  `myString: ${myString}, anotherString: ${anotherString}, hello: ${hello}, myName: ${myName}`
);

// using string utility functions
// finding the length of myString
console.log(`length: ${myString.length}`);

// finding the first character of myString
console.log(`first character: ${myString[0]}`);

// finding the 11th character of myString
console.log(`11th character: ${myString.charAt(10)}`);

// using function slice to extract part of a string
let slicedString = myString.slice(5, 10);
console.log(`slicedString: ${slicedString}`);

// using function substring to get part of a string
let substringString = anotherString.substring(6, 9);
console.log(`substring: ${substringString}`);

// changing the myName variable value to upper and lowecase and outputing to screen
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// using concat method to join two strings
let greeting = hello.concat(myName);
console.log(`greeting: ${greeting}`);

// using trim to remove spaces from anotherString
let trimmedString = anotherString.trim();
console.log(`trimmedString: ${trimmedString}`);

// using replace method to change "is a" to an empty space in myString
let newString = myString.replace("is a", "");
console.log(`newString: ${newString}`);

// using split method to myString using spaces to break the string
let wordsArray = myString.split(" ");
console.log(wordsArray);

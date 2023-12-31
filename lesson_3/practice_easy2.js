/* Q1: Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your important pet dinosaur.";
// A:
console.log(advice.replace('important', 'urgent')); */

/* Q2: The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// A:
console.log(numbers.reverse(numbers.slice(', ')));
console.log([...numbers].sort((num1, num2) => num2 - num1)); */

/* Q3: Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
// A:
console.log(numbers.includes(number2)); */

/* Q4: Starting with the string: show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";
// A:
let firstWords = "Four score and ";
console.log(firstWords.concat(famousWords));
console.log(firstWords + famousWords); */

/* Q5: Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
//A: 
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers); */

/* Q6: Create a new array that contains all of the above values, but in an un-nested format:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// A: 
flintstones = [].concat(...flintstones);
console.log(flintstones); */

/* Q7: Create an array from this object that contains only two elements: Barney's name and Barney's number:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// A: 
console.log(Object.entries(flintstones).filter(element => element[0] === "Barney").flat()); */

/* Q8: How would you check whether the objects assigned to variables numbers and table below are arrays?
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// A:
console.log(Array.isArray(table)); */

/* Q9: Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
let title = "Flintstone Family Members";
// A:
let padding = Math.floor((40 - title.length) / 2)
console.log(title.padStart(padding + title.length)); */

/* Q10: Write a one-line expression to count the number of lower-case t characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
// A: 
console.log(statement1.split('').filter(char => char === 't').length); */
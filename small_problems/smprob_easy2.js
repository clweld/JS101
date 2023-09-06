// Small Problems Easy 2

/* 1) Welcome Stranger
// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or 
// more elements that, when combined with adjoining spaces, will produce a person's name. The 
// object will contain two keys, "title" and "occupation", and the appropriate values. Your 
// function should return a greeting that uses the person's full name, and mentions the person's 
// title.

// CW:
function greetings(arr, obj) {
  return `Hello, ${arr.join(' ')}! Nice to have a ${obj["title"] + ' ' + obj["occupation"]} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// LS: 
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}
*/

/* 2) Greeting a user
// Write a program that will ask for user's name. The program will then greet the user. If the user 
// writes "name!" then the computer yells back to the user.

// CW:
const RL_SYNC = require('readline-sync');

function getName() {
  let name = RL_SYNC.question('What is your name? ');
  if (name.includes('!')) {
    return `HELLO ${name.toUpperCase().replace('!', '.')} WHY ARE WE SCREAMING?`
  } else {
    return `Hello ${name}.`
  }
}

// LS: 
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name? ");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
*/


/* 3) Multiplying Two Numbers
// Create a function that takes two arguments, multiplies them together, and returns the result.

// CW:
function multiply(num1, num2) {
  return num1 * num2;
}

// LS:
function multiply(num1, num2) {
  return num1 * num2;
 };
*/


/* 4) Squaring an Argument
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function 
// that computes the square of its argument (the square is the result of multiplying a number by 
// itself).

// CW:
function square(num) {
  return multiply(num, num);
}

// LS: 
function square(number) {
  return multiply(number, number);
}
*/


/* 5) Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then prints the results of 
// the following operations on those two numbers: addition, subtraction, product, quotient, 
// remainder, and power. Do not worry about validating the input.

// CW: 
const readlineSync = require('readline-sync');

let num1 = readlineSync.question('==> Enter the first number: ');
let num2 = readlineSync.question('==> Enter the second number: ');

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${num1 / num2}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);

// LS: 
const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);
*/


/* 6) The End Is Near But Not Here
// Write a function that returns the next to last word in the String passed to it as an argument.
// Words are any sequence of non-blank characters.
// You may assume that the input String will always contain at least two words.

// CW: 
function penultimate(str) {
  let strToArr = str.split(' ');
  return strToArr[strToArr.length - 2];
}

// LS:
function penultimate(words) {
  let wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
};
*/


/* 7) Exclusive Or
// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value 
// if both operands are falsey. The && operator returns a truthy value if both of its operands are 
// truthy, and a falsey value if either operand is falsey. This works great until you need only one, 
// but not both, of two conditions to be truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns 
// true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a 
// boolean result instead of a truthy/falsy value as returned by || and &&.

// CW:
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true
  } else {
    return false;
  }
}

// LS: 
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}
*/


/* 8) Odd Lists
// Write a function that returns an Array that contains every other element of an Array that is 
// passed in as an argument. The values in the returned list should be those values that are in the 
// 1st, 3rd, 5th, and so on elements of the argument Array.

// CW:
function oddities(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    oddArr.push(arr[i]);
  }
  return oddArr;
}

// LS: 
function oddities(array) {
  let oddElements = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    oddElements.push(array[idx]);
  }
  return oddElements;
}
*/


/* 9) How Old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age 
// be a random number between 20 and 120 (inclusive).

// CW:
let teddyAge = Math.floor(Math.random() * 101) + 20;
console.log(`Teddy is ${teddyAge} years old!`);

// LS:
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);
*/


/* 10) When Will I Retire?
// Build a program that logs when the user will retire and how many more years the user has to 
// work until retirement.

// CW:
const readlineSync = require('readline-sync');
const CURRENT_YEAR = 2023

let userAge = readlineSync.question('What is your age? ');
let retireAge = readlineSync.question('At what age would you like to retire? ');

function yearsTillRetirement(currentAge, targetAge) {
  return targetAge - currentAge;
}

let years = yearsTillRetirement(userAge, retireAge);

console.log(`It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + years}.
            \nYou only have ${years} years of work to go!`);

// LS: 
let readlineSync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age?\n"));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire?\n")
);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);
*/


/* 11) Get Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of 
// the string. If the string has an odd length, you should return exactly one character. If the string
// has an even length, you should return exactly two characters.

// CW: 
function centerOf(str) {
  let strMiddle = str.length / 2
  if (str.length % 2 !== 0) {
    return str.charAt(strMiddle);
  } else if (str.length % 2 === 0) {
    return str.charAt(strMiddle - 1) + str.charAt(strMiddle);
  }
}

console.log(centerOf('Launch'));

// LS: 
function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}
*/


/* 12) Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, 
// return the negative of that number. If the argument is a negative number, return it as-is.

// CW:
function negative(num) {
  return num >= 0 ? num *= -1 : num;
}

// LS:
function negative(number) {
  return Math.abs(number) * -1;
}
*/
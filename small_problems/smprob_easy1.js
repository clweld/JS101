/* 1) Isn't it Odd?
// Write a function that takes one integer argument, which may be positive, negative, or zero. This
// method returns true if the number's absolute value is odd. You may assume that the
// argument is a valid integer value.

// CW:
function isOdd(num) {
  return num % 2 !== 0;
}

// LS: 
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}
*/


/* 2) Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// CW:
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// LS:
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}
*/


/* 3) Even Numbers
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// CW:
for (let i = 0; i < 100; i += 2) {
  if (i === 0) continue;

  console.log(i);
}

// LS:
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
*/


/* 4) How big is the room?
// Build a program that asks the user to enter the length and width of a room in meters, and then
// logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to 
// collect user input.

// Example:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// CW: 
const RL_SYNC = require('readline-sync');
const PROMPT = message => console.log(message);

function getLength() {
  let length = RL_SYNC.question(PROMPT('Enter the length of the room in meters:'));
  return length;
}

function getWidth() {
  let width = RL_SYNC.question(PROMPT('Enter the width of the room in meters:'));
  return width;
}

function calcArea(length, width) {
  return length * width;
}

function displayArea(areaSQM, areaSQFT) {
  PROMPT(`The area of the room is ${areaSQM} square meters (${areaSQFT} square feet).`)
}

let areaSQM = calcArea(getLength(), getWidth()).toFixed(2);
let areaSQFT = (areaSQM * 10.7639).toFixed(2);

displayArea(areaSQM, areaSQFT);

// LS: 
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);
*/


/* 5) Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The
// program must compute the tip, and then log both the tip and the total amount of the bill to
// the console. You can ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// CW:
const RL_SYNC = require('readline-sync');

let bill = RL_SYNC.question('What is the bill? ');
bill = parseFloat(bill);

let tipPercent = RL_SYNC.question('What is the tip percentage? ');
tipPercent = parseFloat(tipPercent);

let tip = bill * (tipPercent / 100);
console.log(`The tip is $${tip.toFixed(2)}`);

let total = bill + tip;
console.log(`The total is $${total.toFixed(2)}`);

// LS:
let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage??\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
*/


// 6) Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0, then asks whether the 
// user wants to determine the sum or the product of all numbers between 1 and the entered 
// integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

/* CW:
const RL_SYNC = require('readline-sync');

let userInt = parseFloat(RL_SYNC.question('Please enter an integer greater than 0: '));
let userChoice = RL_SYNC.question('Enter "s" to compute the sum, or "p" to computer the product. ').toLowerCase();

function buildArray(integer) {
  let array = [];
  for (i = 1; i <= integer; i++) {
    array.push(i);
  }
  return array;
}

let integerArray = buildArray(userInt);

function calcSum(integerArray) {
  return integerArray.reduce((sum, currInt) => sum + currInt);
}

function calcProduct(integerArray) {
  return integerArray.reduce((sum, currInt) => sum * currInt);
}

function sumOrProd(userChoice) {
  if (userChoice === 's') {
    let sum = calcSum(integerArray);
    console.log(`The sum of the integers between 1 and ${userInt} is ${sum.toFixed(0)}.`)
  } else if (userChoice === 'p') {
    let product = calcProduct(integerArray);
    console.log(`The product of the integers between 1 and ${userInt} is ${product.toFixed(0)}.`)
  } else {
    console.log('Invalid choice.');
  }
}

sumOrProd(userChoice);

// LS: 
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}
*/


/* 7) Short Long Short
// Write a function that takes two strings as arguments, determines the length of the two
// strings, and then returns the result of concatenating the shorter string, the longer string, and 
// the shorter string once again. You may assume that the strings are of different lengths.

// CW:
function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

// LS:
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}
*/


/* 8) Leap Years (Part 1)
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly 
// divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it 
// is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year 
// greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap 
// year.

// CW:
function isLeapYear(year) {
  if ((year % 4 === 0) && 
      (year % 100 !== 0) || 
      (year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
}

console.log(isLeapYear(400));

// LS:
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
*/


/* 9)Leap Years (Part 2)
// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 
// 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that 
// is evenly divisible by 4.

function isLeapYear(year) {
  if (year >= 1752 &&
      ((year % 4 === 0) && 
      (year % 100 !== 0) || 
      (year % 400 === 0))) {
        return true;
      } else if (year < 1752 &&
                year % 4 === 0) {
                  return true;
                } else {
        return false;
      }
}

console.log(isLeapYear(400));

// LS:
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
*/

/* 10) Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, 
// inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result 
// should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
// You may assume that the number passed in is an integer greater than 1.

// CW:
function multiSum(value) {
  let sum = 0;
  for (let num = 1; num <= value; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    } 
  }
  return sum;
}

// LS: 
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
*/


/* 11) UTF-16 String Value
// Write a function that determines and returns the UTF-16 string value of a string passed in as an 
// argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the 
// argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the 
// character.)

// CW: 
function utf16Value(str) {
  let utf16Sum = 0;

  for (let char = 0; char < str.length; char ++) {
    utf16Sum += str.charCodeAt(char);
  }

  return utf16Sum;
}

console.log(utf16Value('Launch School')); // 1251

// LS:
function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}
*/
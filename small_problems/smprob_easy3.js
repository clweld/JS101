// Small Problems Easy 3

/* 1)
// Write a function that takes a string argument and returns a new string that contains the value 
// of the original string with all consecutive duplicate characters collapsed into a single character.

// CW:

// PEDAC
//input: string
//output: copy of original string 
//rules: new string has all duplicate characters reduced to single character
//algorithm:
//- declare new empty string variable
//- iterate over original string, identify when current character
//  is same as previous character
//    - if so, skip current character
//    - if not, add to new string

function crunch(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
        newStr += str[i];
      }
    }

  return newStr;
}

// LS:
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
*/


/* 2) Bannerizer
// Write a function that will take a short line of text, and write it to the console log within a box.

// CW: 
// input: string
// output: original string 
// rules: string must fit inside of a box with empty line above and below
// algorithm: find length of string
//  - write log box format for empty string as example
//  - allow for box top and bottom line to expand for addition of string length
//    - use .repeat to add extra character to border
//  - log string to center line

function logInBox(str) {
  let length = str.length;
  console.log('+-' + '-'.repeat(length) + '-+');
  console.log('| ' + ' '.repeat(length) + ' |');
  console.log('| ' + str + ' |');
  console.log('| ' + ' '.repeat(length) + ' |');
  console.log('+-' + '-'.repeat(length) + '-+');
}

// LS: 
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/


/* 3) Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a string of alternating 
// '1's and '0's, always starting with a '1'. The length of the string should match the given 
// integer.

// CW:
// input: positive integer
// output: string of alternating 1, 0
// rules: - length of string matches integer
//  - must start with 1
//  - can end with 1 or 0
// algorithm:
//  - declare string variable with empty string
//  - while string.length < integer
//    - append 1 to string
//    - append 0 to string

function stringy(num) {
  let str = '';
  while (str.length < num) {
    str += '1';
    str += '0';
  }
  return str;
} // didn't work with odd number

// LS: 
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};
*/


/* 5) Right Triangles
// Write a function that takes a positive integer, n, as an argument and logs a right triangle 
// whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the 
// images below) should have one end at the lower-left of the triangle, and the other end at the 
// upper-right.

// CW:
// PEDAC
// input: positive integer n
// output: print triangle of stars with n lines
// rules: triangle tip at upper right
// algorithm:
//  - set line variable with repeat spaces equal to n + 1
//  - over each iteration, replace the last space with a star

function triangle(targetNum) {
  let line = ' '.repeat(targetNum + 1);
  
  for (let lastChar = line[targetNum]; lastChar > 1; lastChar--) {
    lastChar.replace('*', ' ');
    console.log(lastChar);
  }
  return line
} // grr not even close to working

// LS: 
function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}
*/


/* 6) Madlibs
// Madlibs is a simple game where you create a story template with "blanks" for words. You, or 
// another player, then construct a list of words and place them into the story, creating an often 
// silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective
// and injects them into a story that you create.

// CW:
const READLINE_SYNC = require('readline-sync');

function madlib() {
  let noun = READLINE_SYNC.question('Enter a noun: ');
  let verb = READLINE_SYNC.question('Enter a verb: ');
  let adjective = READLINE_SYNC.question('Enter an adjective: ');
  let adverb = READLINE_SYNC.question('Enter an adverb: ');

  console.log(`\nOnce upon a time a ${noun} learned how to fly. One day
a ${adjective} chicken decided to ${adverb} fly out of her farm
and bumped into the ${noun} in the air. The two became
friends and decided to go ${verb} together.`);
}

madlib();

// LS:
let readlineSync = require("readline-sync");

console.log("Enter a noun:");
let noun = readlineSync.prompt();

console.log("Enter a verb:");
let verb = readlineSync.prompt();

console.log("Enter an adjective:");
let adjective = readlineSync.prompt();

console.log("Enter an adverb:");
let adverb = readlineSync.prompt();

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
*/


/* 7) Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its 
// right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas
// 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless 
// the argument is a double number; otherwise, return the double number as-is.

// CW:
// PEDAC
// input: integer
// output: either original integer, or doubled integer
// rules: if integer is already a double number, skip. else double
// algorithm:
//  - determine if argument is already a double number
//    - needs to be an even length to be a possible double number
//    - substring string[0] to string[length / 2] = string[length / 2] to string[string.lenth]

function twice(num) {
  if (num.length % 2 === 1) {
    return num * 2;
  } else {
    num = String(num);
    if (num.substring(0, (num.length / 2)) !== num.substring((num.length / 2), num.length)) {
      num = Number.parseInt(num) * 2;
      return num;
    } else {
      num = Number.parseInt(num);
      return num;
    }
  }
}

// LS:
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}
*/


/* 8) Grade Book
// Write a function that determines the mean (average) of the three scores passed to it, and 
// returns the letter associated with that grade.

// Numerical score letter grade list:
//     90 <= score <= 100: 'A'
//     80 <= score < 90: 'B'
//     70 <= score < 80: 'C'
//     60 <= score < 70: 'D'
//     0 <= score < 60: 'F'

// Tested values are all between 0 and 100. There is no need to check for negative values or 
// values greater than 100.

// CW:
function getGrade(score1, score2, score3) {
  let mean = Math.floor((score1 + score2 + score3) / 3);
  console.log (mean);
  let grade = '';
    if (mean >= 90 && mean <= 100) {
      grade = 'A';
    } else if (mean >= 80 && mean < 90) {
      grade = 'B';
    } else if (mean >= 70 && mean < 80) {
      grade = 'C';
    } else if (mean >= 60 && mean < 70) {
      grade = 'D';
    } else if (mean >= 0 && mean < 60) {
      grade = 'F';
    }
  return grade;
}

// LS:
function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
*/


/* 9) Clean up the words
// Given a string that consists of some words and an assortment of non-alphabetic characters, 
// write a function that returns that string with all of the non-alphabetic characters replaced by 
// spaces. If one or more non-alphabetic characters occur in a row, you should only have one 
// space in the result (i.e., the result string should never have consecutive spaces).

// CW:
// PEDAC
// input: string with nonalphabetic characters
// output: string with nonabc chars removed and spaces replaced
// rules: no more than one space added per substring of nonabc chars
// algorithm:
//  - divide string into chars array
//  - iterate over each char to see if !== .includes(alphabet)
//  - check if previous char is a space array[i -1?]
//  - if not abc and not a space, reassign char to space
//  - if not abc and space present, splice out char

function cleanUp(str) {
  let charArr = str.split('');
  let cleanStr = '';
  console.log(charArr);
  for (let char = 0; char < charArr.length; char++) {
    
    if ('abcdefghijklmnopqrstuvwxyz'.includes(char)) continue;
    else {
      char = ' ';
      let previousChar = charArr[char - 1];
      if (previousChar === ' ') {
        charArr.splice(char, 1);
      }
    }
    console.log(char);
  }
  cleanStr = charArr.join('');
  return cleanStr;
} // infinite loop?

// LS:
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}
*/


/* 10) What Century is That?
// Write a function that takes a year as input and returns the century. The return value should be a 
// string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as 
// appropriate for that number.
// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th 
// century.

// CW:
// PEDAC
// input: year
// output: century (year 2023 is the 21st century)
// rules: output includes appropriate suffix
//  - 1901-2000 = 20th century
// algorithm:
//  - divide the year by 100 (century)
//  - math.ceil rounds up to next integer
//  - check last integer to choose correct suffix
//    - year[year.length - 1]
//    - 1 = st, 2 = nd, 3 = rd, 4+ = th

function century(year) {
  let century = (Math.ceil(year / 100)).toString();
  let lastNum = century.slice(-1);
  if ((century.slice(-2) >= '04') && (century.slice(-2) <= '20')) {
    century += 'th';
  } else {
  switch (lastNum) {
    case '1':
      century += 'st';
      break;
    case '2':
      century += 'nd';
      break;
    case '3':
      century += 'rd';
      break;
    case '0':
      century += 'th'
      break;
    }
  }
  return century;
}

// LS:
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}
*/
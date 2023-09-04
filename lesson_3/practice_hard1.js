/* Q1: Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
// A: No, unreachable code? JS inserts a semicolon after return on second function. */

/* Q2: What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // A: { first: [1, 2] } */

/* Q3: Given the following similar sets of code, what will each code snippet print?
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); 
console.log(`two is: ${two}`); 
console.log(`three is: ${three}`); 
// A: 
"one is: one"
"two is: two"
"three is: three"


//
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); 
console.log(`two is: ${two}`); 
console.log(`three is: ${three}`); 
// A: 
"one is: one"
"two is: two"
"three is: three"

//
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); 
console.log(`two is: ${two}`); 
console.log(`three is: ${three}`); 
// A:
"one is: two"
"two is: three"
"three is: one" */

/* Q4: 
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
} */
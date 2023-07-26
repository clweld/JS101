/* Q1: Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];
// A:
numbers.length = 0 
numbers.splice(0, numbers.length) 
while (numbers.length) {
  numbers.pop();
}
console.log(numbers); */

/* Q2: What will the following code output?
console.log([1, 2, 3] + [4, 5]);
// A:  1, 2, 34, 5. The + operator converts arrays to strings. */

/* Q3: What will the following code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
// A: "hello there" */

/* Q4: What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
// A: [ { first: 42 }, { second: "value2" }, 3, 4, 5 ] */

/* Q5: The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
// A: 
function isColorValid(color) {
  return (color ? "blue" : "green");
}

function isColorValid(color) {
  return color === "blue" || color === "green";
} */
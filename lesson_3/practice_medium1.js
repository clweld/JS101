/* Q1: For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:
// A - Christine: 
let str = "The Flintstones Rock!";
let repetitions = 10;

function repeatStr(string) {
  for (i = 0; i < repetitions; i += 1) {
      console.log(string);
      string = string.padStart(string.length + 1, " ");
  }
}

repeatStr(str);
// A - LS:
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
} */

/* Q2: Return a new string that swaps the case of all of the letters:
let munstersDescription = "The Munsters are creepy and spooky.";
// A - LS: split, map, function __ if/else return lower upper
console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("")); */

/* Q3: Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
//
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
} */

/* Q4: 
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
/* A: .push() is mutative, and .concat() is not. So in the first function,
the buffer is mutated by .push, and is returned with the new return value.
Whereas with .concat(), the buffer is not mutated, and is returned with the old value. */

/* Q5: What will the following two lines of code output?
console.log(0.3 + 0.6); // = 0.9
console.log(0.3 + 0.6 === 0.9); // true
// A: Wrong, JS screws up with floating point numbers */

/* Q6: What do you think the following code will output?
let nanArray = [NaN];
console.log(nanArray[0] === NaN); // false. Test with Number.isNaN() */

/* Q7: What is the output of the following code?
let answer = 42;
function messWithIt(someNumber) {
  return (someNumber += 8);
}
let newAnswer = messWithIt(answer);
console.log(answer - 8); // 34 */

/* Q8: Did the family's data get ransacked? Why or why not?
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};
function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
messWithDemographics(munsters); // Yes it's mutated. */

/* Q9: What does the following code output?
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); 
// A: paper */

/* Q10: What will the following function invocation return?
function foo(param = "no") {
  return "yes";
}
function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
bar(foo());
// A: "no" */
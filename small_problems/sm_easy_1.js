/* 1: Isn't it Odd?

function isOdd(number) { //CW 
  if ((Math.abs(number) % 2) !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(7));

function isOdd(number) { //LS 
  return Math.abs(number) % 2 === 1;
}
*/

/* 2: Odd Numbers

function oddNumbers() { //CW 
  let number = 1;
  console.log(number);
  while (number < 99) {
    number += 2;
    console.log(`\n${number}`);
  }
}

for (let number = 1; number < 100; number += 2) { //LS 
  console.log(number);
}
*/

/* 3: Even Numbers

for (let number = 2; number < 100; number += 2) { //CW 
  console.log(number);
}

for (let number = 1; number < 100; number += 1) { //LS
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
*/

// 4: How big is the room?
/* CW
const RL_SYNC = require('readline-sync');
const SQM_TO_SQFT = 10.7639 // 1 square meter == 10.7639 square feet

function prompt(message) {
  console.log(`=> ${message}`);
}

function getUserLength() {
  let userLength = RL_SYNC.question(prompt('What is the length of the room in meters?'));
  userLength = parseInt(userLength);
  return userLength;
}

function getUserWidth() {
  let userWidth = RL_SYNC.question(prompt('What is the width of the room in meters?'));
  userWidth = parseInt(userWidth);
  return userWidth;
}

function calcRoomArea(userLength, userWidth) {
  let roomArea = userLength * userWidth;
  return roomArea;
}

let roomAreaMeters = Math.round(calcRoomArea(getUserLength(), getUserWidth()));
let roomAreaFeet = Math.round(roomAreaMeters * SQM_TO_SQFT);

prompt(`The area of the room is ${roomAreaMeters} square meters (${roomAreaFeet} square feet).`);
*/

/* LS
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
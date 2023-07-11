const MESSAGES = require('./calculator_messages.json');

const LANGUAGE = 'en';

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidName(name) {
  return name.trimStart() === '' 
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

prompt(messages('welcome', LANGUAGE));
let name = readline.question();

while(invalidName(name)) {
  prompt(messages('validName', LANGUAGE));
  name = readline.question();
}

while (true) {

  prompt(messages('firstNumber', LANGUAGE));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('validNumber', LANGUAGE));
    number1 = readline.question();
  }

  prompt(messages('secondNumber', LANGUAGE));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('validNumber', LANGUAGE));
    number2 = readline.question();
  }

  prompt(messages('whichOperation', LANGUAGE));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('chooseOperation', LANGUAGE));
    operation =  readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(messages('result', LANGUAGE) + `${output}`);

  prompt(messages('anotherOperation', LANGUAGE));
  let answer = readline.question();
  
  if (answer[0].toLowerCase() !== 'y') break;
}
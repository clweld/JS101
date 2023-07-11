
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidAmountOrDuration(number) {
  return number.trimStart() === '' ||
         Number(number) < 0        ||
         Number(number) === 0      ||
         Number.isNaN(Number(number));
}

function invalidRate(number) {
  return number.trimStart() === '' ||
         Number(number) < 0        ||
         Number.isNaN(Number(number));
}

function invalidAnswer(answer) {
  return answer.trimStart() === ''        ||
         (answer[0].toLowerCase() !== 'y' &&
          answer[0].toLowerCase() !== 'n');
}

prompt('Welcome to Mortgage Calculator!');

while (true) {

  prompt('What is the loan amount?');
  let loanAmount = readline.question();

  while (invalidAmountOrDuration(loanAmount)) {
    prompt('Please enter a positive number greater than zero.');
    loanAmount = readline.question();
  }

  prompt('What is the annual percentage rate? For example enter 5 for 5%');
  let annualRate = readline.question();

  while (invalidRate(annualRate)) {
    prompt('Please enter a positive number greater than zero.');
    annualRate = readline.question();
  }

  prompt('What is the length of the loan in months?');
  let durationMonths = readline.question();

  while (invalidAmountOrDuration(durationMonths)) {
    prompt('Please enter a positive number.');
    durationMonths = readline.question();
  }

  let monthlyRate = (annualRate / 100) / 12;
  let monthlyPayment = '';
  if (annualRate > 0) {
    monthlyPayment = loanAmount *
                      (monthlyRate /
                        (1 - Math.pow((1 + monthlyRate), (-durationMonths))));
  } else {
    monthlyPayment = loanAmount / durationMonths;
  }

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}.`);

  prompt('Would you like to perform another calculation? (y/n)');
  let answer = readline.question();

  while (invalidAnswer(answer)) {
    prompt('Please enter "y" or "n".');
    answer = readline.question();
  }
  if (answer[0] === 'n') break;
}


function perfectNumber(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  if (sum === number) {
    console.log(number);
  }
}

const number1 = +prompt("enter number 1:");
const number2 = +prompt("enter number2:");

for (let i = number1; i <= number2; i++) {
perfectNumber(i)
}




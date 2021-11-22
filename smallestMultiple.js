// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function isDivisibleBy20(num) {
  let flag = true;

  for (let i = 1; i <= 20; i++) {
    if (num % i !== 0) {
      flag = false;
    }
  }
  return flag;
}

let number = 1;
while (!isDivisibleBy20(number)) {
  number++;
}

console.log(number);

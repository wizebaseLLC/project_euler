// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

let num = 0;
let runner = 0;

while (num <= 10001) {
  const prime = isPrime(runner);

  if (prime) {
    num++;
    if (num === 10001) {
      console.log({ prime, num, runner });
    }
  }
  runner++;
}
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

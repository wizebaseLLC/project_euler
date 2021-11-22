{
  /* <p>The sum of the squares of the first ten natural numbers is,</p>
$$1^2 + 2^2 + ... + 10^2 = 385$$
<p>The square of the sum of the first ten natural numbers is,</p>
$$(1 + 2 + ... + 10)^2 = 55^2 = 3025$$
<p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640$.</p>
<p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p> */
}

const limit = 100;
let sum = 0;
let square = 0;

for (let i = 1; i <= limit; i++) {
  sum += i * i;
}

for (let i = 1; i <= limit; i++) {
  square += i;
}

console.log(square * square - sum);

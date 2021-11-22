// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
const arr = [];
function reverseString(str, i) {
  const split = str.split("");
  const reversed = split.reverse().join("");
  const worked = str === reversed;
  if (worked) arr.push({ str, i });
  return worked;
}

let a = 999;
let b = 999;

for (let i = a; i > 99; i--) {
  for (let r = b; r > 99; r--) {
    reverseString((i * r).toString(), r);
  }
}

console.log(arr.map((x) => parseInt(x.str)).reduce((x, y) => (y > x ? y : x)));

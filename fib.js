/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

const end = 4000000;
let arr = [1, 2];

while (arr[arr.length - 1] < end) {
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
}

const evenValued = arr.filter((x) => x % 2 === 0 && x < end);
console.log(evenValued.reduce((x, y) => x + y));

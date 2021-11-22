// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(n) {
  if (n == 2 || n == 3) return true;
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function largestPrimeFactor(n) {
  let prime = 2;
  while (n > 1) {
    while (n % prime === 0) {
      n /= prime;
    }
    if (n == 1) break;
    do {
      prime++;
    } while (!isPrime(prime));
  }
  return prime;
}

console.log(largestPrimeFactor(600851475143));

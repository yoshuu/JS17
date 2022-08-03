export function isPrime(input) {
  if (input === 0) return false;
  if (input === 1) return false;
  for (let i = 2; i < input; i++) {
    if (input % i === 0) return false;
  }
  return true;
}

export function findPrime(x, y) {
  let arr = [];
  for (let i = x; i <= y; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

export function findMultiple(input) {
  let arr = [];
  for (let i = 1; i < 100; i++) {
    if (i % input == 0) arr.push(i);
  }
  return arr;
}

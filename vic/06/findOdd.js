export function findOdd(input) {
  let result = input.split("");
  return result.filter((item, index) => index % 2 === 0);
}

// let a = "vic";
// const newResult = findOdd(a);
// console.log(newResult);

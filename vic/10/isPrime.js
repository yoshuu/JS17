export function findPrime(input) {
  if (input === 0) return false;
  if (input === 1) return false;
  for (let i = 2; i < input; i++) {
    if (input % i === 0) return false;
  }
  return true;
}

// export function isIndex(input) {
//   let result = "";
//   for (const [element, index] of input.entries()) {
//     if (isPrime(index)) {
//       result += `質數為${element}  索引值為${index}` + `\n`;
//     }
//   }
//   return result.trimEnd();
// }

// export function isIndex(input) {
//   return input
//     .map((item, index) => {
//       if (isPrime(item)) {
//         return { item, index };
//       } else {
//         return undefined;
//       }
//     })
//     .filter((item) => item !== undefined)
//     .map((item) => {
//       return `質數為${item.item}  索引值為${item.index}`;
//     });
// }
export function findIndex(input) {
  return input
    .map((item, index) => ({
      index,
      item,
    }))
    .filter(({ item }) => findPrime(item));
  // .map(({ item }) => {
  //   return `質數為${item.item}  索引值為${item.index}`;
  // });
}

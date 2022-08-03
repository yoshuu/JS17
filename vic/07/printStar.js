// export function printStar(n) {
//   let printRotateStar = "";
//   n.forEach((item) => {
//     item.forEach((el) => {
//       printRotateStar += el;
//     });
//     printRotateStar += "\n";
//   });
//   return printRotateStar;
// }

export function printStar(n) {
  let printRotateStar = "";
  n.map((item) => {
    item.map((el) => {
      printRotateStar += el;
    });
    printRotateStar += "\n";
  });
  return printRotateStar;
}

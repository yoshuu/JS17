// 宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，印出陣列中所包含的質數以及其索引值。

import { findIndex } from "./isPrime.js";

main();

function main() {
  let arr = [3, 50, 0, 13, 2, 4, 11];

  const result = findIndex(arr);

  // console.log(result.join("\n"));
  console.log(result);
}

// 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 function  divi(n)
// 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

import makeQuestion from "../utils/readline.js";
import { divi } from "./divi.js";
import {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckInvalidNumber,
  CheckSafeInteger,
} from "../utils/verify.js";

function validators(value) {
  CheckInteger(value);
  CheckBlank(value);
  CheckNegative(value);
  CheckInvalidNumber(value);
  CheckSafeInteger(value);
}

main();

async function main() {
  const input = await makeQuestion("讓您輸入一正整數");

  try {
    validators(input);

    const firstTime = 1;
    const calculate = (n) => divi(n, firstTime);

    const result = calculate(input);

    console.log(`${input}除以3的話,除${result}次後, 小數點後第2位會等於0`);
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

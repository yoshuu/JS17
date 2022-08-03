//~Q5. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`
//~(n最小為 4, 只會出現偶數)

import makeQuestion from "../utils/readline.js";
import { umleven } from "./calculate.js";
import {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckInvalidNumber,
  CheckDownlimit,
  Checkeven,
  CheckSafeInteger,
  useValidators,
} from "../utils/verify.js";

main();

async function main() {
  const strInput = await makeQuestion("請輸入一個最小為4,然後是整數的數字:");

  try {
    const validators = [
      CheckBlank,
      CheckInteger,
      CheckInvalidNumber,
      CheckSafeInteger,
      Checkeven,
      CheckDownlimit,
      CheckNegative,
    ];

    useValidators(strInput, validators);

    const numInput = Number(strInput);

    const result = umleven(numInput);
    console.log(result);
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

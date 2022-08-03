//  細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，試寫一遞迴函數function twofold(b, m) 。
// 讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。

import makeQuestion from "../utils/readline.js";
import { twofold } from "./calculate.js";
import {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckInvalidNumber,
  CheckSafeInteger,
  useValidators,
} from "../utils/verify.js";

main();

async function main() {
  let bacteria = 1;

  const input = await makeQuestion("請輸入分鐘數:");

  try {
    const validators = [
      CheckBlank,
      CheckInteger,
      CheckInvalidNumber,
      CheckSafeInteger,
      CheckNegative,
    ];

    useValidators(input, validators);

    const numInput = Number(input);

    const result = twofold(bacteria, numInput);
    console.log(
      `初始1隻細菌的狀態下,現在經過了${numInput}分鐘,現在總共有${result}隻細菌`
    );
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

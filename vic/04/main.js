// 輸入 n 印出 1+2-3+4-5+6...n 的算式與總和
import makeQuestion from "../utils/readline.js";
import { printResult } from "./calculate.js";
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
  const input = await makeQuestion("請您輸入值：");

  try {
    const validators = [
      CheckBlank,
      CheckInteger,
      CheckInvalidNumber,
      CheckSafeInteger,
      CheckNegative,
    ];

    useValidators(input, validators);

    const numberInput = Number(input);

    const result = printResult(numberInput);

    console.log(result);
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

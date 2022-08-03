/*
使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」
*/
import makeQuestion from "../utils/readline.js";
import { getTakeRemainder } from "../02/getTakeRemainder.js";
import {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckInvalidNumber,
  CheckSafeInteger,
} from "../utils/verify.js";

main();

function validators(value) {
  CheckInteger(value);
  CheckBlank(value);
  CheckNegative(value);
  CheckInvalidNumber(value);
  CheckSafeInteger(value);
}

async function main() {
  const firstValue = await getFirstValue();
  const secondValue = await getSecondValue();
  console.log(getTakeRemainder(firstValue, secondValue));
}

async function getFirstValue() {
  const firstInput = await makeQuestion("請您輸入第一個整數:");
  try {
    validators(firstInput);
    return Number(firstInput);
  } catch (error) {
    console.log(error.message);
    return getFirstValue();
  }
}

async function getSecondValue() {
  const secondInput = await makeQuestion("請您輸入第二個整數:");
  try {
    validators(secondInput);
    return Number(secondInput);
  } catch (error) {
    console.log(error.message);
    return getSecondValue();
  }
}

/*
好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，
讓使用者自行輸入年齡，並判斷門票價錢
*/
import makeQuestion from "../utils/readline.js";
import { getPrice } from "./getPrice.js";
import {
  CheckInteger,
  CheckBlank,
  CheckInvalidNumber,
  CheckSafeInteger,
  CheckNegative,
  useValidators,
} from "../utils/verify.js";

main();

async function main() {
  const input = await makeQuestion("若要買票，請您輸入您的年齡:");

  try {
    const validators = [
      CheckBlank,
      CheckInteger,
      CheckInvalidNumber,
      CheckSafeInteger,
      CheckNegative,
    ];

    useValidators(input, validators);

    const age = Number(input);

    const ticketPrice = getPrice(age);

    console.log(`您的門票價格是${ticketPrice}元`);
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

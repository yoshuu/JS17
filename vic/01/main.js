// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
import makeQuestion from "../utils/readline.js";
import { playMovie } from "./playMovie.js";
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
  const input = await makeQuestion("請問幾個人看電影？");

  try {
    const validators = [
      CheckBlank,
      CheckInteger,
      CheckInvalidNumber,
      CheckSafeInteger,
      CheckNegative,
    ];

    useValidators(input, validators);

    const people = Number(input);

    playMovie(people)
      ? console.log("照常播放電影")
      : console.log("沒人看就不播電影囉");
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

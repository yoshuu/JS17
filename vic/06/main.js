//  宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母
import makeQuestion from "../utils/readline.js";
import { findOdd } from "./findOdd.js";
import {
  CheckBlank,
  CheckNegative,
  isEnglishNames,
  useValidators,
} from "../utils/verify.js";

main();

async function main() {
  try {
    console.log("請分別輸入四個英文名字");
    let englishName = [];
    for (let name = 0; name < 4; name++) {
      let inputName = await makeQuestion("請輸入英文名字：");

      const validators = [CheckBlank, isEnglishNames, CheckNegative];

      useValidators(inputName, validators);
      englishName.push(inputName);
    }
    let firstName = englishName[0];
    const firstResult = findOdd(firstName);

    let thirdName = englishName[2];
    const thirdResult = findOdd(thirdName);

    console.log(`第一個名字的單個字母是：${firstResult}`);
    console.log(`第三個名字的單個字母是：${thirdResult}`);
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

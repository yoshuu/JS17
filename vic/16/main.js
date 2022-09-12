// 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
// 讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

import { change } from "./calculate.js";
import { ask } from "../utils/promise.js";
import {
  CheckBlank,
  CheckNegative,
  isEnglishNames,
  CheckEnglishLength,
  useValidators,
} from "../utils/verify.js";

main();

function main() {
  ask("請輸入五個英文字母:").then((string) => {
    const validators = [
      CheckBlank,
      CheckNegative,
      isEnglishNames,
      CheckEnglishLength,
    ];

    try {
      useValidators(string, validators);
    } catch (error) {
      console.log(error.message);
      return main();
    }

    let space = change(string);
    console.log("印出加密結果", space);
  });
}

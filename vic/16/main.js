// 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
// 讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

import { caesarcipher } from "./calculate.js";
import { ask } from "../utils/promise.js";
import {
  CheckBlank,
  CheckNegative,
  isEnglishNames,
  CheckEnglishIength,
  useValidators,
} from "../utils/verify.js";

main();

function main() {
  ask("請輸入五個英文字母:").then((n) => {
    try {
      const validators = [
        CheckBlank,
        CheckNegative,
        isEnglishNames,
        CheckEnglishIength,
      ];

      useValidators(n, validators);

      var space = [];
      for (let i = 0; i < n.length; i++) {
        let convert = caesarcipher(3, n[i]);
        space.push(convert);
      }
      let result = space.join("");
      console.log(result);
    } catch (error) {
      console.log(error.message);
      return main();
    }
  });
}

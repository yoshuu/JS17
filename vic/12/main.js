// 找出10~20的質數，並列出前述各質數在1~100的倍數

import { findPrime, findMultiple } from "./calculate.js";

main();

function main() {
  let prime = findPrime(10, 20);

  for (let i = 0; i < prime.length; i++) {
    console.log(`質數：${prime[i]}的所有倍數為` + findMultiple(prime[i]));
  }
}

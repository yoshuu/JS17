import * as readline from "node:readline";

export function ask(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question, (input) => {
      resolve(input);
      rl.close();
    });
  });
}

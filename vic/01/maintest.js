import * as readline from "node:readline";
import { playMovie } from "./playMovie.js";
import {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckInvalidNumber,
  CheckSafeInteger,
  useValidators,
} from "../utils/verify.js";

const apple = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  return new Promise((resolve) => {
    apple.question("請問幾個人看電影？", (input) => resolve(input));
  });
}

ask().then((result) => {
  try {
    const validators = [
      CheckBlank,
      CheckInteger,
      CheckInvalidNumber,
      CheckSafeInteger,
      CheckNegative,
    ];

    useValidators(result, validators);

    const people = Number(result);

    playMovie(people)
      ? console.log("照常播放電影")
      : console.log("沒人看就不播電影囉");
  } catch (error) {
    console.log(error.message);
    return ask();
  }
  apple.close();
});

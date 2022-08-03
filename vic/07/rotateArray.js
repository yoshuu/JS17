export function rotateArray(input) {
  const reverseInput = input.reverse();

  // const inputTurn90Deg = [];
  // for (let col = 0; col < reverseInput[0].length; col++) {
  //   inputTurn90Deg[col] = Array(reverseInput);
  // }

  let inputTurn90Deg = input[0].map((item) => []);
  let arrayRowLength = input[0].length;
  let arrayColLength = input.length;

  for (let indexRow = 0; indexRow < arrayColLength; indexRow++) {
    for (let indexCol = 0; indexCol < arrayRowLength; indexCol++) {
      inputTurn90Deg[indexCol][indexRow] = reverseInput[indexRow][indexCol];
    }
  }

  return inputTurn90Deg;
}

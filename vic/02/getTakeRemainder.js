export function getTakeRemainder(oneInput, twoInput) {
  if (Number(oneInput) % 3 === Number(twoInput) % 3) {
    return "餘數相同";
  } else {
    return "餘數不相同";
  }
}

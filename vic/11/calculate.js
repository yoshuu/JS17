export function calculate(n, cost, oneCost) {
  let moeny = 0;
  let i = 0;
  const difference = cost - oneCost;
  do {
    moeny = moeny + cost;
    i++;
  } while (i < n);

  return moeny - difference - fullFive(n);
}

export function fullFive(n) {
  let i = Number(n);
  let j = i / 5;
  let num = Math.trunc(j) * 200;
  return num;
}

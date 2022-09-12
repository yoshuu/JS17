// 方法一

// export function calculate(period, cost, oneCost) {
//   let money = 0;
//   let i = 0;
//   const difference = cost - oneCost;
//   do {
//     money = money + cost;
//     i++;
//   } while (i < period);

//   return money - difference - fullFive(period);
// }

// export function fullFive(period) {
//   let i = +period;
//   let j = i / 5;
//   let num = Math.trunc(j) * 200;
//   return num;
// }

// 方法二

export function totalFee(inputPeriod) {
  const periodFee = 500;
  const PeriodDiscount = 0.79;

  const totalDiscount =
    discountPerFullNPeriod(inputPeriod, 5, 200) +
    firstPeriodDiscount(periodFee, 1 - PeriodDiscount);

  return originalFee(periodFee, inputPeriod) - totalDiscount;
}

function discountPerFullNPeriod(totalPeriod, discountUnitPeriod, discountFee) {
  // 每滿五期再折200元
  const result = +totalPeriod / discountUnitPeriod;

  return Math.trunc(result) * discountFee;
}

function firstPeriodDiscount(periodFee, Discount) {
  //第一期79折
  return Discount * periodFee;
}

function originalFee(periodFee, inputPeriod) {
  let Period = 0;
  let Fee = 0;

  do {
    Fee = Fee + periodFee;
    Period++;
  } while (Period < inputPeriod);

  return Fee;
}

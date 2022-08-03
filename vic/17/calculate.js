export function calulate(votes, ranking, order) {
  return ranking
    .map((input, index) => votes[index] * (4 - input.indexOf(order)))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

//  const ranking = [
//    ["c1", "c3", "c2", "c4"],
//    ["c3", "c2", "c4", "c1"],
//    ["c2", "c3", "c4", "c1"],
//    ["c4", "c3", "c2", "c1"],
//  ];

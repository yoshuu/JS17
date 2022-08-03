// 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)

import { calulate } from "./calculate.js";

main();

function main() {
  const votes = [51, 5, 23, 21];
  const ranking = [
    ["c1", "c3", "c2", "c4"],
    ["c3", "c2", "c4", "c1"],
    ["c2", "c3", "c4", "c1"],
    ["c4", "c3", "c2", "c1"],
  ];

  const result = [
    calulate(votes, ranking, "c1"),
    calulate(votes, ranking, "c2"),
    calulate(votes, ranking, "c3"),
    calulate(votes, ranking, "c4"),
  ];

  console.log(
    `第一個候選人${result[0]}分 第二個候選人${result[1]}分 第三個候選人${result[2]}分 第四個候選人${result[3]}分`
  );
}

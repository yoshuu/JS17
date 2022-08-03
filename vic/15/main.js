// 有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
// 在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，
// 當超過限重時即停止搬運，並列印出三種器材的個數及總重量

import { carryEquipments } from "./calculate.js";

main();

function main() {
  let num = [0, 0, 0];
  let sport = [30, 20, 50];
  let totalWeight = 0;
  let limit = 1000;

  const result = carryEquipments(num, sport, totalWeight, limit);

  console.log(`總重量：${result.totalWeight}kg`);
  console.log(
    `啞鈴：${result.num[0]}個  單槓：${result.num[1]}個  跑步機：${result.num[2]}個`
  );
}

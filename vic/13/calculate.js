// 不計算兔子倒退時間
// export function rabbitCanLazy(turtleRunTime, rabbitRunTime, distance) {
//   const gapTime = Math.floor(
//     distance / turtleRunTime - distance / rabbitRunTime
//   );

//   return gapTime.toFixed(0);
// }

// 有計算兔子倒退時間
export function rabbitCanLazy(turtleRunTime, rabbitRunTime, distance) {
  //兔子故意用每跑5秒鐘後退1公尺
  const rabbitRecoilTime = (1 / rabbitRunTime) * (distance / rabbitRunTime / 5);

  const gapTime = Math.floor(
    distance / turtleRunTime - distance / rabbitRunTime
  );

  const result = gapTime - rabbitRecoilTime;

  return result.toFixed(0);
}

// 正常跑所花時間 = 1000m / 20m / s;
// 每5s可倒退次數 = 正常跑所花時間 / 每5s倒退;
// 退後1m花的時間 = 1m / 20m / s;
// 可倒退總時間 = 退後1m花的時間 * 每5s可倒退次數;

// 1000m / 20m/s = 50s
// 50s / 5s/次 = 10次   可倒退次數
// 1m / 20m/s = 0.05s
// 0.05s x 10次 = 0.5s  總倒退時間
// 0.5s x 20m/s = 10m   總倒退距離
// 1000m - 10m = 990m   正常跑總距離
// 10m / 20m/s = 0.5s   剩餘跑時間
// 50s + 0.5s + 0.5s = 51s

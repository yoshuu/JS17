//  龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
// 請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽 ?

import { rabbitCanLazy } from "./calculate.js";

main();

function main() {
  let turtleSpeed = 0.28;
  let rabbitRunTime = 20 - 0.2;
  let distance = 30000;

  const result = rabbitCanLazy(turtleSpeed, rabbitRunTime, distance);
  console.log("這隻兔子可以偷懶" + result + "秒");
}

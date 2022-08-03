export function rabbitCanLazy(turtleRunTime, rabbitRunTime, distance) {
  let rabbitBackTime = (1 / rabbitRunTime) * (distance / rabbitRunTime / 5);

  const result =
    Math.floor(distance / turtleRunTime - distance / rabbitRunTime) -
    rabbitBackTime;

  return result.toFixed(0);

  // return Math.floor(distance / turtleRunTime - distance / rabbitRunTime);
}

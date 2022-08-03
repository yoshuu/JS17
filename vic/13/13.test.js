import { rabbitCanLazy } from "./calculate.js";

describe("測試兔子可以偷懶幾秒後還能跑贏烏龜", () => {
  test("input為一秒兔子跑20公尺 烏龜跑0.28公尺 總共一千公尺 ouput為3520秒", () => {
    let turtle = 0.28;
    let rabbit = 20 - 0.2;
    let distance = 1000;

    const result = rabbitCanLazy(turtle, rabbit, distance);

    expect(result).toBe(3520);
  });

  test("input為一秒兔子跑20公尺 烏龜跑0.28公尺 總共兩千公尺 ouput為7041秒", () => {
    let turtle = 0.28;
    let rabbit = 20 - 0.2;
    let distance = 2000;

    const result = rabbitCanLazy(turtle, rabbit, distance);

    expect(result).toBe(7041);
  });
});

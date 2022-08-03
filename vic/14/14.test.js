import { twofold } from "./calculate.js";

describe("測試b隻細菌再經過m分鐘後變化的細菌數", () => {
  test("input 細菌有1隻經過20分鐘 ouput 為2隻", () => {
    const result = twofold(1, 20);

    expect(result).toBe(2);
  });
  test("input 細菌有1隻經過60分鐘 ouput 為2隻", () => {
    const result = twofold(1, 60);

    expect(result).toBe(8);
  });
  test("input 細菌有2隻經過80分鐘 ouput 為2隻", () => {
    const result = twofold(2, 80);

    expect(result).toBe(32);
  });
});

import { getTakeRemainder } from "./getTakeRemainder.js";

describe("測試是否為餘數", () => {
  test("兩個數字都是3", () => {
    const oneInput = 3;
    const twoInput = 3;
    const result = getTakeRemainder(oneInput, twoInput);

    expect(result).toBe("餘數相同");
  });

  test("一個數字是3,一個數字是5", () => {
    const oneInput = 3;
    const twoInput = 5;
    const result = getTakeRemainder(oneInput, twoInput);

    expect(result).toBe("餘數不相同");
  });
});

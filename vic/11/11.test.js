import { totalFee } from "./calculate.js";

describe("測試輸入所需期數可以自動換算成相對價格", () => {
  test("假如要付一期的話,花費為395元", () => {
    const inputPeriod = 1;
    const result = totalFee(inputPeriod);

    const expected = 395;

    expect(result).toEqual(expected);
  });
  test("假如要付五期的話,花費為2195元", () => {
    const inputPeriod = 5;
    const result = totalFee(inputPeriod);

    const expected = 2195;

    expect(result).toEqual(expected);
  });
  test("假如要付十期的話,花費為4495元", () => {
    const inputPeriod = 10;
    const result = totalFee(inputPeriod);

    const expected = 4495;

    expect(result).toEqual(expected);
  });
});

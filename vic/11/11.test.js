import { money } from "./calculate.js";

describe("測試輸入所需期數可以自動換算成相對價格", () => {
  test("假如要付一期的話,是花費395元", () => {
    let input = 1;
    const result = money(input);

    const expected = `你總共要付395元`;

    expect(result).toEqual(expected);
  });
  test("假如要付五期的話,是花費2195元", () => {
    let input = 1;
    const result = money(input);

    const expected = `你總共要付395元`;

    expect(result).toEqual(expected);
  });
  test("假如要付十期的話,是花費4495元", () => {
    let input = 1;
    const result = money(input);

    const expected = `你總共要付395元`;

    expect(result).toEqual(expected);
  });
});

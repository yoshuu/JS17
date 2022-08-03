import { caesarcipher } from "./calculate.js";

describe("測試讓字母進行偏移位子", () => {
  test("input 字母小寫ａ 移動一位  ouput 字母小寫b", () => {
    const result = caesarcipher(1, "a");
    const expected = "b";

    expect(result).toEqual(expected);
  });
  test("input 字母小寫p 移動五位 ouput 字母小寫u", () => {
    const result = caesarcipher(5, "p");
    const expected = "u";

    expect(result).toEqual(expected);
  });
});

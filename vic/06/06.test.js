import { findOdd } from "./findOdd.js";

describe("測試輸入英文能不能測試單數排序的字母", () => {
  test("輸入vic,會印出v,c", () => {
    let input = "vic";
    const result = findOdd(input);

    expect(result).toBe[("v", "c")];
  });
  test("輸入apple,會印出a,p,e", () => {
    let input = "apple";
    const result = findOdd(input);

    expect(result).toBe[("a", "p", "e")];
  });
  test("輸入book,會印出b,o", () => {
    let input = "book";
    const result = findOdd(input);

    expect(result).toBe[("b", "o")];
  });
});

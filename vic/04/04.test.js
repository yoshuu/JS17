import { printResult } from "./calculate";

describe("測試是不是有正確的依照公式印出答案", () => {
  test("假如輸入是4,結果會是4", () => {
    const value = 4;
    const result = printResult(4);
    expect(result).toBe(`1+2-3+4=4`);
  });

  test("假如輸入是1,結果會是1", () => {
    const value = 1;
    const result = printResult(1);
    expect(result).toBe(`1=1`);
  });
});

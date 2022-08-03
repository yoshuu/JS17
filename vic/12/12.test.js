import { isPrime } from "./calculate.js";

describe("測試是否為質數", () => {
  test("輸入為10, 不是質數", () => {
    const input = 10;
    const result = isPrime(input);

    expect(result).toBeFalsy();
  });

  test("輸入為2, 是質數", () => {
    const input = 2;
    const result = isPrime(input);

    expect(result).toBeTruthy();
  });
  test("輸入為1, 不是質數", () => {
    const input = 1;
    const result = isPrime(input);

    expect(result).toBeFalsy();
  });
  test("輸入為0, 不是質數", () => {
    const input = 0;
    const result = isPrime(input);

    expect(result).toBeFalsy();
  });
});

import { isPrime, findPrime, findMultiple } from "./calculate.js";

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

describe("測試尋找某一個範圍內的質數", () => {
  test("輸入為1到10, 輸出是2,3,5,7", () => {
    const start = 1;
    const last = 10;
    const result = findPrime(start, last);

    const expected = [2, 3, 5, 7];

    expect(result).toEqual(expected);
  });
});

describe("測試尋找某個數字它在100內的質數", () => {
  test("輸入為11, 輸出是2,3,5,7", () => {
    const input = 11;
    const result = findMultiple(input);

    const expected = [11, 22, 33, 44, 55, 66, 77, 88, 99];

    expect(result).toEqual(expected);
  });
});

import { findPrime } from "./isPrime.js";
import { findIndex } from "./isPrime.js";

describe("測試能不能成功的抓出array裡的質數以及它的index", () => {
  test("輸入為[3, 50, 0, 13, 2, 4, 11],測試是否會印出正確質數以及它的index", () => {
    let arr = [3, 50, 0, 13, 2, 4, 11];

    const result = findIndex(arr);

    const expected = [
      { index: 0, item: 3 },
      { index: 3, item: 13 },
      { index: 4, item: 2 },
      { index: 6, item: 11 },
    ];

    expect(result).toEqual(expected);
  });
});

describe("測試是否為質數", () => {
  test("輸入為10, 不是質數", () => {
    const input = 10;
    const result = findPrime(input);

    expect(result).toBeFalsy();
  });

  test("輸入為5, 是質數", () => {
    const input = 5;
    const result = findPrime(input);

    expect(result).toBeTruthy();
  });
  test("輸入為1, 不是質數", () => {
    const input = 1;
    const result = findPrime(input);

    expect(result).toBeFalsy();
  });
  test("輸入為0, 不是質數", () => {
    const input = 0;
    const result = findPrime(input);

    expect(result).toBeFalsy();
  });
});

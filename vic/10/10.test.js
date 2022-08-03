import { isPrime } from "./isPrime.js";
import { isIndex } from "./isPrime.js";

describe("測試能不能成功的抓出array裡的質數以及它的index", () => {
  test("輸入為[3, 50, 0, 13, 2, 4, 11],測試是否會印出正確質數以及它的index", () => {
    const input = [3, 50, 0, 13, 2, 4, 11];
    const result = isIndex(input);

    const expected = [
      "質數為3  索引值為0",
      "質數為13  索引值為3",
      "質數為2  索引值為4",
      "質數為11  索引值為6",
    ];

    expect(result).toEqual(expected);
  });
});

describe("測試是否為質數", () => {
  test("輸入為10, 不是質數", () => {
    const input = 10;
    const result = isPrime(input);

    expect(result).toBeFalsy();
  });

  test("輸入為5, 是質數", () => {
    const input = 5;
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

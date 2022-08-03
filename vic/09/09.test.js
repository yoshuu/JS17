import { arrayAdd } from "./arrayAdd.js";

describe("測試是否有成功的相加", () => {
  test("兩者相加會全為0", () => {
    let arr1 = [0, 0, 0, 0, 0];
    let arr2 = [0, 0, 0, 0, 0];

    const result = arrayAdd(arr1, arr2);
    const expected = [0, 0, 0, 0, 0];

    expect(result).toEqual(expected);
  });
  test("兩者相加會全為1", () => {
    let arr1 = [1, 0, 1, 0, 1];
    let arr2 = [0, 1, 0, 1, 0];

    const result = arrayAdd(arr1, arr2);
    const expected = [1, 1, 1, 1, 1];

    expect(result).toEqual(expected);
  });
  test("兩者相加會全為2", () => {
    let arr1 = [1, 1, 1, 1, 1];
    let arr2 = [1, 1, 1, 1, 1];

    const result = arrayAdd(arr1, arr2);
    const expected = [2, 2, 2, 2, 2];

    expect(result).toEqual(expected);
  });
});

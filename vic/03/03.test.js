import { getPrice } from "./getPrice.js";

describe("測試票價資訊是否正確,6歲到65歲是正常票價,其他是一般票價", () => {
  test("年齡假如是5歲", () => {
    const age = 5;
    const result = getPrice(age);

    expect(result).toBe(200);
  });

  test("年齡假如是25歲", () => {
    const age = 25;
    const result = getPrice(age);

    expect(result).toBe(400);
  });
});

import { divi } from "./divi.js";

describe("測試遞迴,被3除多次後小數點後第2位為0", () => {
  test("3除以3的話要讓小數點後第2位會等於0會需要除1次", () => {
    let input = 3;
    const result = divi(input, 1);
    expect(result).toBe(1);
  });
  test("10除以3的話要讓小數點後第2位會等於0會需要除7次", () => {
    let input = 10;
    const result = divi(input, 1);
    expect(result).toBe(7);
  });
  test("0除以3的話要讓小數點後第2位會等於0會需要除1次", () => {
    let input = 10;
    const result = divi(input, 1);
    expect(result).toBe(7);
  });
});

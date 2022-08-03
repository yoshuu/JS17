import { calulate } from "./calculate.js";

describe("測試是否能正確的算出候選人分數", () => {
  test("input 候選人投票順序[51, 5, 23, 21] output是[253, 251, 305, 191]", () => {
    const votes = [51, 5, 23, 21];
    const ranking = [
      ["c1", "c3", "c2", "c4"],
      ["c3", "c2", "c4", "c1"],
      ["c2", "c3", "c4", "c1"],
      ["c4", "c3", "c2", "c1"],
    ];

    const result = [
      calulate(votes, ranking, "c1"),
      calulate(votes, ranking, "c2"),
      calulate(votes, ranking, "c3"),
      calulate(votes, ranking, "c4"),
    ];
    const expected = [253, 251, 305, 191];

    expect(result).toEqual(expected);
  });
});

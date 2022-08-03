import { playMovie } from "./playMovie.js";

describe("測試是否播放電影, 有人的話結果true否則為false", () => {
  test("人數如果是10人的話", () => {
    const people = 10;
    const result = playMovie(people);

    expect(result).toBeTruthy();
  });

  test("沒有人的話", () => {
    const people = 0;
    const result = playMovie(people);

    expect(result).toBeFalsy();
  });
});

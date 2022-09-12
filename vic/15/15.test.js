import { carryEquipments } from "./calculate.js";

// describe("測試輸入Math.random()指定回傳,輸出對應值", () => {
//   test("讓Math.random為0,所以全部都是搬30kg的啞鈴  output 最後重量會是990", () => {
//     let num = [0, 0, 0];
//     let sport = [30, 20, 50];
//     let totalWeight = 0;
//     let limit = 1000;

//     jest.spyOn(Math, "random").mockReturnValueOnce(1);

//     jest.spyOn(Math, "random").mockReturnValue(0);

//     const result = carryEquipments(num, sport, totalWeight, limit);

//     const addUp = result.totalWeight;

//     expect(addUp).toBe(990);
//   });
// });

describe("測試輸入Math.random()指定回傳,輸出對應值", () => {
  test("input是全部都搬運30kg的啞鈴  output 最後重量會是990", () => {
    let num = [0, 0, 0];
    let sport = [30, 20, 50];
    let totalWeight = 0;
    let limit = 1000;

    jest.spyOn(Math, "random").mockReturnValue(0);

    const result = carryEquipments(num, sport, totalWeight, limit);

    const addUp = result.totalWeight;

    expect(addUp).toBe(990);
  });
  test("input是全部都搬運20kg的啞鈴  output 最後重量會是980", () => {
    let num = [0, 0, 0];
    let sport = [30, 20, 50];
    let totalWeight = 0;
    let limit = 1000;

    jest.spyOn(Math, "random").mockReturnValue(0.4);

    const result = carryEquipments(num, sport, totalWeight, limit);

    const addUp = result.totalWeight;

    expect(addUp).toBe(980);
  });
  test("input是全部都搬運50kg的啞鈴  output 最後重量會是980", () => {
    let num = [0, 0, 0];
    let sport = [30, 20, 50];
    let totalWeight = 0;
    let limit = 1000;

    jest.spyOn(Math, "random").mockReturnValue(0.9);

    const result = carryEquipments(num, sport, totalWeight, limit);

    const addUp = result.totalWeight;

    expect(addUp).toBe(950);
  });
  test("input是全部都搬運50kg的啞鈴  output 最後重量會是950", () => {
    let num = [0, 0, 0];
    let sport = [30, 20, 50];
    let totalWeight = 0;
    let limit = 1000;

    jest.spyOn(Math, "random").mockReturnValue(0.9);

    const result = carryEquipments(num, sport, totalWeight, limit);

    const addUp = result.totalWeight;

    expect(addUp).toBe(950);
  });
  test("input是一個搬20kg的啞鈴,其他全部都搬運50kg的啞鈴  output 最後重量會是980", () => {
    let num = [0, 0, 0];
    let sport = [30, 20, 50];
    let totalWeight = 0;
    let limit = 1000;

    jest.spyOn(Math, "random").mockReturnValueOnce(0);
    jest.spyOn(Math, "random").mockReturnValue(0.9);

    const result = carryEquipments(num, sport, totalWeight, limit);

    const addUp = result.totalWeight;

    expect(addUp).toBe(980);
  });
});

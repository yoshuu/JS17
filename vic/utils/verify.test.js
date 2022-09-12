import {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckInvalidNumber,
  Checkeven,
  CheckDownlimit,
  isEnglishNames,
  CheckSafeInteger,
  CheckEnglishLength,
} from "./verify.js";

describe("檢查是不是輸入整數", () => {
  test("不是整數", () => {
    const value = "我不是整數";
    expect(() => {
      CheckInteger(value);
    }).toThrow("請您不要輸入非數字");
  });
});

describe("檢查是不是輸入空白", () => {
  test("沒有輸入", () => {
    const value = "";
    expect(() => {
      CheckBlank(value);
    }).toThrow("請輸入後再送出！");
  });

  test("輸入空白", () => {
    const value = " ";
    expect(() => {
      CheckBlank(value);
    }).toThrow("請不要輸入空白！");
  });
});

describe("檢查是不是輸入負數", () => {
  test("輸入負數", () => {
    const value = -1;
    expect(() => {
      CheckNegative(value);
    }).toThrow("不要輸入負數！");
  });
});

describe("檢查是不是二,八,十六進位或是科學符號e", () => {
  test("輸入十六進位", () => {
    const value = "0x11";
    expect(() => {
      CheckInvalidNumber(value);
    }).toThrow("請別輸入16進位");
  });
  test("輸入八進位", () => {
    const value = "0o11";
    expect(() => {
      CheckInvalidNumber(value);
    }).toThrow("請別輸入8進位");
  });
  test("輸入十六進位", () => {
    const value = "0b11";
    expect(() => {
      CheckInvalidNumber(value);
    }).toThrow("請別輸入2進位");
  });
  test("輸入科學符號e", () => {
    const value = "1e5";
    expect(() => {
      CheckInvalidNumber(value);
    }).toThrow("請別輸入e科學符號");
  });
});

describe("檢查是不是輸入偶數", () => {
  test("不是偶數", () => {
    const value = 1;
    expect(() => {
      Checkeven(value);
    }).toThrow("只能輸入偶數!");
  });
});

describe("檢查是不是輸入4以下的數字", () => {
  test("輸入3", () => {
    const value = 3;
    expect(() => {
      CheckDownlimit(value);
    }).toThrow(`不要輸入4以下的數字`);
  });
});

describe("檢查是不是輸入英文", () => {
  test("輸入3", () => {
    const value = "我是中文";
    expect(() => {
      isEnglishNames(value);
    }).toThrow(`不要輸入非英文`);
  });
});

describe("檢查是不是輸入安全數字", () => {
  test("輸入2的53次方+1", () => {
    const value = Math.pow(2, 53);
    expect(() => {
      CheckSafeInteger(value);
    }).toThrow(`請再輸入小一點，因為超過了數字精確表示範圍`);
  });
});

describe("檢查是不是輸入五個字母", () => {
  test("輸入四個字母", () => {
    const value = "aaaa";
    expect(() => {
      CheckEnglishLength(value);
    }).toThrow(`請輸入五個英文字母謝謝`);
  });
});

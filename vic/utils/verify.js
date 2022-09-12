function CheckInteger(value) {
  if (!Number.isInteger(Number(value))) {
    throw new Error("請您不要輸入非數字");
  }
}

function CheckBlank(value) {
  if (value === "") {
    throw new Error("請輸入後再送出！");
  }
  if (/\s/.test(value)) {
    throw new Error("請不要輸入空白！");
  }
}

function CheckNegative(value) {
  if (value < 0) {
    throw new Error("不要輸入負數！");
  }
}

function CheckInvalidNumber(value) {
  if (value.startsWith("0x")) throw new Error("請別輸入16進位");
  if (value.startsWith("0o")) throw new Error("請別輸入8進位");
  if (value.startsWith("0b")) throw new Error("請別輸入2進位");
  if (value.includes("e")) throw new Error("請別輸入e科學符號");
}

function Checkeven(value) {
  if (value % 2 !== 0) {
    throw new Error("只能輸入偶數!");
  }
}

function CheckDownlimit(value) {
  if (value < 4) {
    throw new Error(`不要輸入4以下的數字`);
  }
}

function isEnglishNames(value) {
  if (!/^[A-z]+$/.test(value)) {
    throw new Error(`不要輸入非英文`);
  }
}

function CheckSafeInteger(value) {
  if (!Number.isSafeInteger(Number(value))) {
    throw new Error(`請再輸入小一點，因為超過了數字精確表示範圍`);
  }
}

function CheckEnglishLength(value) {
  if (value.length !== 5) {
    throw new Error(`請輸入五個英文字母謝謝`);
  }
}

function useValidators(value, validators) {
  validators.forEach((validator) => validator(value));
}

export {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckInvalidNumber,
  Checkeven,
  CheckDownlimit,
  isEnglishNames,
  CheckSafeInteger,
  CheckEnglishLength as CheckEnglishLength,
  useValidators,
};

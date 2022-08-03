export function divi(input, index) {
  let value = input / 3;
  let time = index;
  if (value.toFixed(3).slice(-2, -1) == "0") {
    return time;
  } else {
    return divi(value, time + 1);
  }
}

// const result = divi(0, 1);

// console.log(result);

// num.toFixed(3).slice(-2, -1);

// value.toFixed(2) === "0.00"

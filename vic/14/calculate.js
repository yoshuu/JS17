// export function twofold(b, m) {
//   const initial = Math.pow(2, 1);
//   if (m > 0) {
//     b = b * initial;
//     return twofold(b, m - 20);
//   }
//   return Math.floor(b);
// }

export function twofold(b, m) {
  if (m >= 20) {
    b = b * 2;
    return twofold(b, m - 20);
  }
  return b;
}

export function umleven(n) {
  let initial = (n - 2) * n;
  if (n === 4) {
    return initial;
  } else {
    return initial + umleven(n - 2);
  }
}

export function getPrice(age) {
  const price = 400;
  const halfPrice = 0.5 * price;

  if (age < 6 || age > 65) {
    return halfPrice;
  } else {
    return price;
  }
}

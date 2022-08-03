export function turnArray(string) {
  return string
    .split("\n")
    .map((item) => item.split(""))
    .filter((item) => item.length !== 0);
}

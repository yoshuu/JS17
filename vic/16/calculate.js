export function caesarcipher(shift, string) {
  let code = string.charCodeAt(0) - 97;
  let newCode = (code + shift) % 26;

  return String.fromCharCode(newCode + 97);
}
export function change(string, shift = 3) {
  const space = string.split("");
  return space.map((item) => caesarcipher(shift, item)).join("");
}

export function caesarcipher(n, s) {
  let code = s.charCodeAt(0) - 97;
  let newCode = (code + n) % 26;

  return String.fromCharCode(newCode + 97);
}

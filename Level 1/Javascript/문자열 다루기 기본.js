function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").find((v) => isNaN(v)) === undefined ? true : false;
  }
  return false;
}

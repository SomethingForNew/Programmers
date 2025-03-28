function solution(s) {
  let dNum = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s[dNum - 1] + s[dNum] : s[dNum];
}

function solution(absolutes, signs) {
  return absolutes.reduce((acc, curr, idx) => {
    return signs[idx] ? (acc += curr) : (acc -= curr);
  }, 0);
}

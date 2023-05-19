function solution(a, b) {
  const aPlusb = Number(String(a) + String(b));
  const aTimesb = 2 * a * b;
  return aPlusb >= aTimesb ? aPlusb : aTimesb;
}

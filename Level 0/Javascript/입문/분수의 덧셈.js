function solution(numer1, denom1, numer2, denom2) {
  // 최대공약수 구하기(유클리드 호제법)를 이용한 방법
  const numerator = numer1 * denom2 + numer2 * denom1;
  const denominator = denom1 * denom2;
  const getGCD = (a, b) => (a % b ? getGCD(b, a % b) : b);
  const GCD = getGCD(numerator, denominator);

  return [numerator / GCD, denominator / GCD];
}

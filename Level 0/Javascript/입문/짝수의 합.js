// 내 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((v) => !(v % 2))
    .reduce((acc, cur) => acc + cur, 0);
}

/**
 * 다른 사람 풀이
 * // TODO: 가우스의 덧셈 공부하기
 */
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

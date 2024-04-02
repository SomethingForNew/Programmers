// 내 풀이
function solution(n) {
  return Math.sqrt(n) % 1 ? 2 : 1;
}

/**
 * 다른 사람 풀이
 * isInteger 활용
 */
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

// 내 풀이
function solution(n) {
  return [...n.toString()].map(Number).reduce((acc, cur) => acc + cur, 0);
}

/**
 * 다른 사람 풀이
 *
 * reduce 안의 cur 만 Numer로 형변환 하면 map(Number)보다 빠른가??
 */
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

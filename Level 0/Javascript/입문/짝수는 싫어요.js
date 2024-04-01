// 내 풀이
function solution(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      arr.push(i);
    }
  }

  return arr;
}

/**
 * 다른 사람 풀이 1
 * i % 2 조건문 없이 반복문의 i를 +2 하면 됨
 */
function solution(n) {
  const answer = [];

  for (let i = 1; i <= n; i += 2) answer.push(i);

  return answer;
}

/**
 * 내가 다시 푼 방법
 * n 만큼의 빈배열 생성 후 0으로 채워넣고
 *
 */
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2);
}

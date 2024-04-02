// 내 풀이
function solution(n) {
  const answerArr = [];

  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      answerArr.push(i);
    }
  }

  return answerArr;
}

// 다른 사람 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}

// 내 풀이
function solution(n, t) {
  let answer = n;

  for (let i = 1; i <= t; i++) {
    answer = answer * 2;
  }

  return answer;
}

// 다른 사람 풀이
function solution(n, t) {
  return n * Math.pow(2, t);
}

// 내 풀이
function solution(my_string) {
  return [...my_string.replace(/[a-z]/g, "")].map(Number).sort((a, b) => a - b);
}

// 다른 사람 풀이
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

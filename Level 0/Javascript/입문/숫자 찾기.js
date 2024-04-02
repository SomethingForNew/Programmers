// 내 풀이1
function solution(num, k) {
  return [...num.toString()].indexOf(String(k)) !== -1
    ? [...num.toString()].indexOf(String(k)) + 1
    : -1;
}

// 내 풀이2
function solution(num, k) {
  return [...num.toString()].indexOf(String(k)) + 1 || -1;
}

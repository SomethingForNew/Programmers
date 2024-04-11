// 내 풀이
function solution(num_list, n) {
  const temp = [];

  while (num_list.length > 0) {
    temp.push(num_list.splice(0, n));
  }

  return temp;
}

// 다른 사람 풀이
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}

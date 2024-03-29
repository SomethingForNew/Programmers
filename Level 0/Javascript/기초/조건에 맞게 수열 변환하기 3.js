function solution(arr, k) {
  return k % 2 !== 0 ? arr.map((v) => v * k) : arr.map((v) => v + k);
}

// 이것도 조건을 map 안에 넣어버릴수 있다...
function solution(arr, k) {
  return arr.map((v) => (k % 2 ? v * k : v + k));
}

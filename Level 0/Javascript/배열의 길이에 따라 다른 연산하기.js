// 최초 풀이
function solution(arr, n) {
  if (arr.length % 2 !== 0) {
    return arr.map((v, i) => (i % 2 === 0 ? v + n : v));
  } else {
    return arr.map((v, i) => (i % 2 !== 0 ? v + n : v));
  }
}

// 조건을 map 안에 넣으면 코드가 더 깔끔해진다.
function solution(arr, n) {
  return arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
}

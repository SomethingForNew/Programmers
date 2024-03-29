function solution(num_str) {
  return [...num_str].map(Number).reduce((acc, cur) => acc + cur, 0);
}

// 다른사람 풀이
// function solution(num_str) {
//   return [...num_str].reduce((acc, cur) => acc + +cur, 0);
// }

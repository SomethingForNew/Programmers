function solution(arr, divisor) {
  // 1차 풀이
  // let answer = [];

  // arr.forEach((v) => {
  //   if (v % divisor === 0) return answer.push(v);
  // });

  // return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);

  // 2차 풀이
  let answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);

  return answer.length !== 0 ? answer : [-1];
}

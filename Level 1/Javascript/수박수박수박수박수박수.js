function solution(n) {
  // let answer = "";

  // for (let i = 0; i < n; i++) {
  //   answer += i % 2 === 0 ? "수" : "박";
  // }

  // return answer;

  // 함수형 프로그램 느낌
  Array.from({ length: n }, (_, i) => (i % 2 === 0 ? "수" : "박")).join("");
}

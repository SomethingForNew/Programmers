function solution(s) {
  let answer = 0;

  s.split(" ").map((v, i) => {
    if (v === "Z") {
      answer -= +s.split(" ")[i - 1];
    } else {
      answer += +v;
    }
  });

  return answer;
}

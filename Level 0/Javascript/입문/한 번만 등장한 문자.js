function solution(s) {
  const sArr = [...s];
  const answerArr = [];

  sArr.map((v) => {
    if (s.indexOf(v) === s.lastIndexOf(v)) {
      answerArr.push(v);
    }
  });

  return answerArr.sort().join("");
}

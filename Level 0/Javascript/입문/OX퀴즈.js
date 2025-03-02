function solution(quiz) {
  let answer = [];

  quiz.forEach((el) => {
    let num = 0;
    let [x, op, y, , z] = el.split(" ");

    if (op === "+") {
      num = Number(x) + Number(y);
    } else num = Number(x) - Number(y);

    return num === Number(z) ? answer.push("O") : answer.push("X");
  });

  return answer;
}

// 내 풀이
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");

  switch (op) {
    case "+":
      return +a + +b;
    case "-":
      return a - b;
    case "*":
      return a * b;
  }
}

// 다른 사람의 풀이
const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return ops[op](+a, +b);
}

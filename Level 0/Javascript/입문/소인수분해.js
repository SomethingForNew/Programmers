function solution(n) {
  const answer = [];
  let a = 2;

  while (n >= 2) {
    if (n % a === 0) {
      answer.push(a);
      n = n / a;
    } else {
      a++;
    }
  }

  return [...new Set(answer)];
}

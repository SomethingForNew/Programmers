function solution(num, total) {
  const median = Math.ceil(total / num);
  const min = median - Math.trunc(num / 2);
  const answer = [];

  for (let i = 0; i < num; i++) {
    answer.push(min + i);
  }

  return answer;
}

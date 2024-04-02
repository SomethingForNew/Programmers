// 내 풀이
function solution(numbers) {
  const sortArr = numbers.sort((a, b) => b - a);

  return sortArr[0] * sortArr[1];
}

// 위에서 조금 더 나이스 하게 수정
function solution(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a);

  return a * b;
}

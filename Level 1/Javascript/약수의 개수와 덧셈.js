// 내 풀이1
function getDivisorCnt(num) {
  let cnt = 0;
  // 완전 탐색 방법
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      cnt++;
    }
  }

  return cnt;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    getDivisorCnt(i) % 2 === 0 ? (result += i) : (result -= i);
  }

  return result;
}

// 다른사람 풀이
function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    /**
     * i를 제곱근 하여 접근
     * 제곱근의 값이 정수이면 약수의 갯수는 홀수이므로 빼고
     *              실수이면 약수의 갯수는 짝수이므로 더한다.
     */
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

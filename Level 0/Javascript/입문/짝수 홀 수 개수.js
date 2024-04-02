// 내 풀이
function solution(num_list) {
  const oddCnt = num_list.filter((v) => !(v % 2)).length;
  const evenCnt = num_list.filter((v) => v % 2).length;

  return [oddCnt, evenCnt];
}

/**
 * 다른 사람 풀이
 *
 * answer 라는 배열에 0으로 세팅 후
 * num_list를 반복문으로 돌면서 answer의 인덱스를 홀짝으로 접근
 */
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

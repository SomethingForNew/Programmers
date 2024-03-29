// 내 풀이
function solution(arr) {
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[j][i]) {
        continue;
      } else {
        cnt++;
      }
    }
  }

  return cnt > 0 ? 0 : 1;
}

/**
 * 다른 사람 풀이
 * some every 함수를 실무에 적용 하는것도 좋아보임
 */
function solution(arr) {
  return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}

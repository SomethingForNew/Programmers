// 내 제출
function solution(rank, attendance) {
  const temp = [];

  rank.map((v, i) => {
    if (attendance[i]) {
      temp.push([v, i]);
    }
  });

  return sum(temp);
}

function sum(tempArr) {
  let answer = 0;

  tempArr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      answer += tempArr[i][1] * 10000;
    }

    if (i === 1) {
      answer += tempArr[i][1] * 100;
    }

    if (i === 2) {
      answer += tempArr[i][1];
    }
  }

  return answer;
}

/**
 * 다른 사람 풀이
 *
 * const rank = [3, 7, 2, 5, 4, 6, 1];
 * const attendance = [false, true, true, true, true, false, false];
 *
 * 1. map((r, i) => [r, i])의 결과 값은 아래와 같음
 * [[ 3, 0 ], [ 7, 1 ],[ 2, 2 ], [ 5, 3 ],[ 4, 4 ], [ 6, 5 ],[ 1, 6 ]]
 *
 * 2. filter(([_, i]) => attendance[i])의 결과 값은 아래와 같음
 * [ [ 7, 1 ], [ 2, 2 ], [ 5, 3 ], [ 4, 4 ] ]
 *
 * 3. .sort(([a], [b]) => a - b)의 결과 값은 아래와 같음
 * [ [ 2, 2 ], [ 4, 4 ], [ 5, 3 ], [ 7, 1 ] ]
 *
 * 4. const [a, b, c ] = [ [ 2, 2 ], [ 4, 4 ], [ 5, 3 ], [ 7, 1 ] ]를
 *    구조분해할당 하면 등수 높은 순으로 3명만 걸러짐
 *    a = [2, 2];
 *    b = [4, 4];
 *    c = [5, 3];
 *
 */
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}

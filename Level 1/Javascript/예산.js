/**
 * for 반복문 방법을 reduce로 활용하는 방법으로 바꿔 봄
 */
function solution(d, budget) {
  //     d.sort((a, b) => a - b);

  //     let cnt = 0;

  //     for (let i = 0; i < d.length; i++) {
  //         if (budget - d[i] >= 0) {
  //             budget -= d[i];
  //             cnt++;
  //         } else {
  //             break;
  //         }
  //     }

  //     return cnt;

  return d
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      return (budget -= curr) >= 0 ? acc + 1 : acc;
    }, 0);
}

// 내 풀이1
function solution(n) {
  let tempArr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) tempArr.push(i);
  }

  return tempArr.reduce((acc, curr) => acc + curr, 0);
}

/**
 * 생각해보니 배열을 쓸 필요가 없었다.
 * 무조껀 배열로 처리하려는 버릇이 생긴것 같다.
 */
function solution(n) {
  let sumNum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sumNum += i;
  }
  return sumNum;
}

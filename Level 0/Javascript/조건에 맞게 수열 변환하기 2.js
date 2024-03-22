function solution(arr) {
  let cnt = 0;
  let prevArr = arr;

  while (true) {
    const currentArr = prevArr.map((v) => {
      if (v >= 50 && v % 2 === 0) {
        return parseInt(v / 2);
      }

      if (v < 50 && v % 2 !== 0) {
        return v * 2 + 1;
      }

      return v;
    });

    const isSame = prevArr.every((v, i) => v === currentArr[i]);

    if (isSame) {
      break;
    }

    cnt += 1;
    prevArr = currentArr;
  }

  return cnt;
}

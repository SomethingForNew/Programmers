// 내 풀이
function solution(i, j, k) {
  let cnt = 0;

  for (i; i <= j; i++) {
    i.toString()
      .split("")
      .map((v) => {
        if (v.includes(k)) {
          cnt++;
        }
      });
  }

  return cnt;
}

// 다른 사람 풀이
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

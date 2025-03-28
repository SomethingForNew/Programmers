function solution(t, p) {
  let cnt = 0;

  for (let i = 0; i < t.length; i++) {
    let num = t.slice(i, i + p.length);

    if (num.length === p.length && num <= p) {
      cnt++;
    }
  }

  return cnt;
}

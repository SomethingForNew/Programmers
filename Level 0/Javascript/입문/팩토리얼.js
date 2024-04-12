function solution(n) {
  let base = 1;

  for (let i = 1; i <= n; i++) {
    base *= i;

    if (base === n) {
      return i;
    }

    if (base > n) {
      return i - 1;
    }
  }
}

function solution(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    const temp = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        temp.push(i);
      }
    }

    if (temp.length >= 3) {
      arr.push(i);
    }
  }

  return arr.length;
}

function solution(lines) {
  let arr = new Array(200).fill(0);

  lines.forEach(([s, e]) => {
    while (s < e) {
      arr[s + 100]++;
      s++;
    }
  });

  return arr.reduce((acc, crr) => (crr > 1 ? acc + 1 : acc), 0);
}

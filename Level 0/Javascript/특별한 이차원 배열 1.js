function solution(n) {
  return Array(n)
    .fill(Array(n).fill(0))
    .map((v1, i1) => {
      return v1.map((v2, i2) => (i2 === i1 ? 1 : v2));
    });
}

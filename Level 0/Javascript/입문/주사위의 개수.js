function solution(box, n) {
  const [bx, by, bh] = box;
  const a = Math.trunc(bx / n);
  const b = Math.trunc(by / n);
  const c = Math.trunc(bh / n);

  return a * b * c;
}

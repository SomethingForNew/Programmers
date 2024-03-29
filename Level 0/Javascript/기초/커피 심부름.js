function solution(order) {
  return order
    .map((v) => {
      return v.includes("latte") ? 5000 : 4500;
    })
    .reduce((acc, cur) => acc + cur, 0);
}

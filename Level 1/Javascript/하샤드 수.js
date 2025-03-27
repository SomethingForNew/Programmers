function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  return x % sum === 0;
}

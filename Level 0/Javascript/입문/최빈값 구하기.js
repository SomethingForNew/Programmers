// TODO: 나중에 다시 풀어보자
function solution(array) {
  const obj = {};

  array.map((v) => {
    if (!obj[v]) {
      obj[v] = 1;
    } else {
      obj[v] += 1;
    }
  });

  const maximum = Math.max(...Object.values(obj));
  const mode = Object.keys(obj).filter((key) => obj[key] === maximum);

  return mode.length > 1 ? -1 : +mode[0];
}

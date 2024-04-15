function solution(array, n) {
  const tempArr = [];

  array.sort((a, b) => a - b).map((v) => tempArr.push(Math.abs(v - n)));

  return array[tempArr.indexOf(Math.min.apply(null, tempArr))];
}

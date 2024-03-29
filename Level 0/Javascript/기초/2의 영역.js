function solution(arr) {
  const fromIndex = arr.indexOf(2);
  const endIndex = arr.lastIndexOf(2) + 1;

  return fromIndex !== -1 ? arr.slice(fromIndex, endIndex) : [-1];
}

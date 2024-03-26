// 내 풀이
function solution(arr1, arr2) {
  const a = arr1.length;
  const b = arr2.length;
  const c = arr1.reduce((acc, cur) => acc + cur);
  const d = arr2.reduce((acc, cur) => acc + cur);

  if (b > a) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  if (a === b) {
    if (c > d) {
      return 1;
    }

    if (c < d) {
      return -1;
    }

    if (c === d) {
      return 0;
    }
  }
}

// 다른 사람 풀이
const solution = (arr1, arr2) => {
  return arr1.length !== arr2.length
    ? compare(arr1.length, arr2.length)
    : compare(arr1, arr2, "reduce");
};

const compare = (a, b, option) => {
  if (option === "reduce") {
    a = a.reduce((acc, cur) => acc + cur);
    b = b.reduce((acc, cur) => acc + cur);
  }
  return a > b ? 1 : a < b ? -1 : 0;
};

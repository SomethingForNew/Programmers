function solution(arr1, arr2) {
  return arr1.map((el, idx) => el.map((v, i) => v + arr2[idx][i]));
}

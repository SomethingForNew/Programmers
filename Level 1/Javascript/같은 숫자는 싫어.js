function solution(arr) {
  /**
   * i가 0 일때 arr[i - 1] 하면 undefined가 나오기 때문에
   * 항상 0번째는 포함하도록 함.
   *
   * 정확성: 71.9
   * 효율성: 28.1
   */
  return arr.filter((v, i) => i === 0 || v !== arr[i - 1]);
}

function solution(arr, k) {
  const setArr = new Set(arr);

  return setArr.size > k
    ? [...setArr].splice(0, k)
    : [...setArr, ...Array(k - setArr.size).fill(-1)];
}

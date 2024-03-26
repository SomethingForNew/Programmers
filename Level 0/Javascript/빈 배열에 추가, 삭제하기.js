function solution(arr, flag) {
  const X = [];

  for (let i = 0; i < flag.length; i++) {
    if (flag[i] === true) {
      for (let j = 0; j < arr[i] * 2; j++) {
        X.push(arr[i]);
      }
    } else {
      X.splice(X.length - arr[i], arr[i]);
    }
  }

  return X;
}

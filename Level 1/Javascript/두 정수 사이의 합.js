function solution(a, b) {
  let tempArr = [];

  if (a < b) {
    for (let i = a; i <= b; i++) {
      tempArr.push(i);
    }

    return tempArr.reduce((acc, curr) => acc + curr, 0);
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      tempArr.push(i);
    }

    return tempArr.reduce((acc, curr) => acc + curr, 0);
  } else {
    return a;
  }
}

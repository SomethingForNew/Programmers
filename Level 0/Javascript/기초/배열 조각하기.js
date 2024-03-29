function solution(arr, query) {
  const tempArr = [...arr];

  query.map((v, i) => {
    if (i % 2 === 0) {
      tempArr.splice(query[i] + 1);
    } else {
      tempArr.splice(0, query[i]);
    }
  });

  return tempArr;
}

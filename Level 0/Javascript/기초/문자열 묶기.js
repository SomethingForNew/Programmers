function solution(strArr) {
  const tempObj = {};
  const maxLength = Math.max.apply(
    null,
    strArr.map((v) => v.length)
  );

  for (let i = 1; i <= maxLength; i++) {
    const data = strArr.filter((v) => v.length === i);

    tempObj[i] = data.length;
  }

  return Math.max.apply(null, Object.values(tempObj));
}

function solution(my_string) {
  // return eval(my_string);

  const numArr = [];
  let sign = 1;

  my_string.split(" ").map((v) => {
    if (v === "+") {
      return (sign = 1);
    } else if (v === "-") {
      return (sign = -1);
    } else {
      numArr.push(v * sign);
    }
  });

  return numArr.reduce((acc, cur) => acc + cur, 0);
}

function solution(num_list) {
  let cnt = 0;

  num_list.map((v) => {
    let number = v;

    while (true) {
      if (number === 1) {
        break;
      }

      if (number % 2 === 0) {
        number = number / 2;
        cnt += 1;
      } else {
        number = (number - 1) / 2;
        cnt += 1;
      }
    }
  });

  return cnt;
}

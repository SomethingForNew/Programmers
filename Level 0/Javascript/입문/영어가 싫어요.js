function solution(numbers) {
  const strNumArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  strNumArr.map((v, i) => {
    numbers = numbers.replaceAll(v, i);
  });

  return Number(numbers);
}

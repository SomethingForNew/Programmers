// 내 풀이
function solution(my_string, num1, num2) {
  const splitString = [...my_string];

  splitString.splice(num1, 1, my_string[num2]);
  splitString.splice(num2, 1, my_string[num1]);

  return splitString.join("");
}

// 다른 사람 풀이
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

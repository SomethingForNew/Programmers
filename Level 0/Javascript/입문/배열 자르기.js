function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

/**
 * slice() VS splice()
 *
 * slice(start, end)는 배열의 일부분을 추출하여 새로운 배열을 반환한다.
 * 원본 배열은 변경되지 않는다.
 *
 * ex) [1, 2, 3, 4, 5].slice(1, 3) => [2, 3]
 *  start 포함 ~ end 앞 index 까지만 반환
 *
 *
 *
 * splice(start, end)는 배열에서 요소룰 추가, 제거 또는 교체 하는 작업을 한다.
 * 원본 배열이 수정된다.
 *
 * ex) [1, 2, 3, 4, 5].slice(1, 3) => [2, 3, 4]
 * start 포함 ~ end 까지 반환
 * 기존 원본 배열 [1, 2, 3, 4, 5]는 [1, 5]만 남게 된다.
 *
 */

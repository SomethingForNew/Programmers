function solution(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    /**
     * 1.왼쪽에서 오른쪽으로 이동 -> 각 Row에 값 넣기
     * [1, 2, 3, 4]
     * [5, 6, 7 ,8]
     * [9, 10, 11, 12]
     * [13, 14, 15, 16]
     */
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }

    top++;

    /**
     * 2.위에서 아래로 이동
     * [1, 2, 3, 4]
     * [8, 9, 10, 5]
     * [13, 14, 11, 6]
     * [16, 15, 12, 7]
     */
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }

    right--;

    /**
     * 3.오른쪽에서 왼쪽으로 이동
     * [1, 2, 3, 4]
     * [11, 12, 13, 5]
     * [16, 15, 14, 6]
     * [10, 9, 8, 7]
     */

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }

    bottom--;

    /**
     * 4.아래에서 위로 이동
     * [1, 2, 3, 4]
     * [12, 13, 14, 5]
     * [11, 16, 15, 6]
     * [10, 9, 8, 7]
     */

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }

    left++;
  }

  return matrix;
}

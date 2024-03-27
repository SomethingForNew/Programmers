/**
 *
 * 내 풀이
 * 조금 어거지 방식으로 해결한게 많이 걸림
 */
function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  if (rows > cols) {
    arr.map((v) => {
      for (let i = 0; i < rows - cols; i++) {
        v.push(0);
      }
    });
  }

  if (cols > rows) {
    for (let i = 0; i < cols - rows; i++) {
      arr.push(Array(cols).fill(0));
    }
  }

  return arr;
}

// 내 풀이
function solution(board, k) {
  // const temp = [];
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        // temp.push(board[i][j]);
        answer += board[i][j];
      }
    }
  }

  // return temp.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

// 다른 사람 풀이
function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
    0
  );
}

/**
 * 4개의 점을 이을 수 있는 경우의 수는 6
 * ab, ac, ad, bc, bd, cd
 *
 * 문제에서 점을 두 개씩 이었을때, 두 직선 이라고 했으니
 * a-b, c-d / a-c, b-d / a-d, b-c 로 확인 해보자
 * 기울기는 (y2 - y1) / (x2 - x1) 로 구한다.
 */

function isParallel(dot1, dot2, dot3, dot4) {
  return (
    (dot2[1] - dot1[1]) * (dot4[0] - dot3[0]) ===
    (dot4[1] - dot3[1]) * (dot2[0] - dot1[0])
  );
}

function solution(dots) {
  const [a, b, c, d] = dots;

  if (isParallel(a, b, c, d)) return 1;
  if (isParallel(a, c, b, d)) return 1;
  if (isParallel(a, d, b, c)) return 1;

  return 0;
}

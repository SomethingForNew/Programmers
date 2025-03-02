function solution(common) {
  const isArithmetic = common[1] - common[0] === common[2] - common[1];
  const a = common[common.length - 1] + common[1] - common[0];
  const b = common[common.length - 1] * (common[1] / common[0]);

  return isArithmetic ? a : b;
}

function solution(a, b) {
  const aPlusb = String(a) + String(b);
  const bPlusa = String(b) + String(a);
  return Number(aPlusb) >= Number(bPlusa) ? Number(aPlusb) : Number(bPlusa);
}

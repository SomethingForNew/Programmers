/**
 * Math.trunc()는 소수점 이하는 다 버린다.
 * ex) Math.trunc(23.3) = 23, Math.trunc(-23.3) = -23
 *
 * Math.floor()는 소수점을 내림한다.
 * ex) Math.floor(23.3) = 23, Math.floor(-23.3) = -24
 * 음수인 경우도 생각해서 소수점을 이하 수를 없애고 싶을때는 Math.trunc를 사용
 */

function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}

/**
 * 정규식 연습
 * /.(?=.{4})/g 의미는 아래와 같다.
 *
 * . 는 임의의 하나의 문자를 의미하고
 * (?=.{4})는 '긍정적 전방 탐색'이라고 해서 뒤에 4개의 문자가 있는 경우에만 매칭 된다.
 * /g 는 '전역검색'이라고 해서 문자열 전체에서 모든 일치 항목을 찾는다.
 *
 * 따라서 해당 정규식의 의미는 '문자열의 마지막 4자리를 제외한 모든 문자'가 된다.
 */
function solution(phone_number) {
  return phone_number.replace(/.(?=.{4})/g, "*");
}

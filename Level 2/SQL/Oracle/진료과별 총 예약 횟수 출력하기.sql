-- 진료과별 총 예약 횟수 출력하기
SELECT MCDP_CD AS "진료과코드"
     , COUNT(MCDP_CD) AS "5월예약건수"
  FROM APPOINTMENT A
--  1. TO_DATE를 이용하여 YYYY-MM-DD 포멧으로 임의의 날짜를 만들어 BETWEEN으로 조건 부여
--  WHERE A.APNT_YMD BETWEEN TO_DATE('2022-05-01','YYYY-MM-DD') AND TO_DATE('2022-05-31', 'YYYY-MM-DD')

--  2. DD를 직접 조건을 주지 않고 MM 으로 월만 해당하는 조건 부여
--  WHERE TO_CHAR(APNT_YMD, 'YYYY-MM') = '2022-05'

--  2. CAST를 이용하여 DATE로 형변환 후 TO_CHAR를 이용하여 다시 문자열로 치환
--  WHERE TO_CHAR(CAST(APNT_YMD AS DATE),'YYYYMM') = '202205'
 GROUP BY MCDP_CD
 ORDER BY "5월예약건수" ASC, MCDP_CD ASC
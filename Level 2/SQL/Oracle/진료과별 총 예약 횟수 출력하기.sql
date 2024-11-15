-- 진료과별 총 예약 횟수 출력하기
SELECT
        MCDP_CD AS "진료과코드"
      , COUNT(*) AS "5월예약건수"
  FROM APPOINTMENT A
 WHERE A.APNT_YMD BETWEEN TO_DATE('2022-05-01','YYYY-MM-DD')
                     AND TO_DATE('2022-05-31', 'YYYY-MM-DD')
 GROUP BY MCDP_CD
 ORDER BY "5월예약건수" ASC, MCDP_CD ASC
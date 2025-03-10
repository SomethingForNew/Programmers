-- 대여 기록이 존재하는 자동차 리스트 구하기.sql

-- Oracle 문법
SELECT DISTINCT H.CAR_ID
  FROM CAR_RENTAL_COMPANY_CAR C
     , CAR_RENTAL_COMPANY_RENTAL_HISTORY H
 WHERE C.CAR_TYPE IN ('세단')
   AND C.CAR_ID = H.CAR_ID
   AND TO_CHAR(H.START_DATE, 'MM') = '10'
   GROUP BY H.CAR_ID
 ORDER BY CAR_ID DESC

 -- ANSI 문법
SELECT DISTINCT H.CAR_ID
  FROM CAR_RENTAL_COMPANY_CAR C
  JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY H
    ON C.CAR_ID = H.CAR_ID
 WHERE C.CAR_TYPE = '세단'
   AND TO_CHAR(H.START_DATE, 'MM') = '10'
 GROUP BY H.CAR_ID
 ORDER BY H.CAR_ID DESC
-- 자동차 대여 기록에서 대여중 또는 대여 가능 여부 구분하기.sql

SELECT CAR_ID,
       MAX(
           CASE WHEN '2022-10-16' BETWEEN TO_CHAR(START_DATE, 'YYYY-MM-DD') AND TO_CHAR(END_DATE, 'YYYY-MM-DD')
                THEN '대여중'
                ELSE '대여 가능'
            END
          )AS AVAILAVILITY
  FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
 GROUP BY CAR_ID
 ORDER BY CAR_ID DESC
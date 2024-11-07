-- GROUP BY 쓰는경우
SELECT
       ROUND(AVG(SUM(DAILY_FEE))) AS AVERAGE_FEE
  FROM CAR_RENTAL_COMPANY_CAR
 WHERE CAR_TYPE = 'SUV'
 GROUP BY DAILY_FEE


-- GROUP BY 안쓰는 경우
-- SELECT ROUND(SUM(DAILY_FEE)/COUNT(*)) AS AVERAGE_FEE
-- FROM CAR_RENTAL_COMPANY_CAR
-- WHERE CAR_TYPE = 'SUV';
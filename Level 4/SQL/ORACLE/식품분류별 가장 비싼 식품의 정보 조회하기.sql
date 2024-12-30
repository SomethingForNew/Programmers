-- 식품분류별 가장 비싼 식품의 정보 조회하기.sql

-- Oracle JOIN
SELECT A.CATEGORY
     , B.MAX_PRICE
     , A.PRODUCT_NAME
  FROM FOOD_PRODUCT A
     , (
        SELECT CATEGORY
             , MAX(PRICE) AS MAX_PRICE
          FROM FOOD_PRODUCT
         WHERE CATEGORY IN ('과자', '국', '김치', '식용유')
         GROUP BY CATEGORY
       ) B
 WHERE A.PRICE = B.MAX_PRICE
   AND A.CATEGORY IN ('과자', '국', '김치', '식용유')
 ORDER BY B.MAX_PRICE DESC


-- ANSI JOIN
SELECT A.CATEGORY
     , B.MAX_PRICE
     , A.PRODUCT_NAME
  FROM FOOD_PRODUCT A
  JOIN (
        SELECT CATEGORY
             , MAX(PRICE) AS MAX_PRICE
          FROM FOOD_PRODUCT
         WHERE CATEGORY IN ('과자', '국', '김치', '식용유')
         GROUP BY CATEGORY
       ) B
    ON A.PRICE = B.MAX_PRICE
   AND A.CATEGORY IN ('과자', '국', '김치', '식용유')
 ORDER BY B.MAX_PRICE DESC
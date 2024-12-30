-- 서울에 위치한 식당 목록 출력하기.sql

-- Oracle JOIN
SELECT I.REST_ID
     , I.REST_NAME
     , I.FOOD_TYPE
     , I.FAVORITES
     , I.ADDRESS
     , R.SCORE
  FROM REST_INFO I
     , (
         SELECT R.REST_ID
              , ROUND(AVG(R.REVIEW_SCORE), 2) AS SCORE
           FROM REST_INFO I
              , REST_REVIEW R
          WHERE I.REST_ID = R.REST_ID
            AND I.ADDRESS LIKE '서울%'
          GROUP BY R.REST_ID
       ) R
 WHERE I.REST_ID = R.REST_ID
 ORDER BY SCORE DESC, FAVORITES DESC


-- ANSI JOIN
SELECT I.REST_ID
     , I.REST_NAME
     , I.FOOD_TYPE
     , I.FAVORITES
     , I.ADDRESS
     , R.SCORE
  FROM REST_INFO I
  JOIN (
         SELECT R.REST_ID
              , ROUND(AVG(R.REVIEW_SCORE), 2) AS SCORE
           FROM REST_INFO I
              , REST_REVIEW R
          WHERE I.REST_ID = R.REST_ID
            AND I.ADDRESS LIKE '서울%'
          GROUP BY R.REST_ID
       ) R
    ON I.REST_ID = R.REST_ID
 ORDER BY SCORE DESC, FAVORITES DESC

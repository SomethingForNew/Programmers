-- 헤비 유저가 소유한 장소.sql

-- Oracle 문법
SELECT A.*
  FROM PLACES A
     , (
          SELECT HOST_ID
               , COUNT(HOST_ID)
            FROM PLACES
          HAVING COUNT(HOST_ID) >= 2
           GROUP BY HOST_ID       
       ) B
 WHERE A.HOST_ID IN B.HOST_ID
 ORDER BY ID

-- ANSI
SELECT A.*
  FROM PLACES A
  JOIN (
         SELECT HOST_ID
              , COUNT(HOST_ID)
           FROM PLACES
         HAVING COUNT(HOST_ID) >= 2
         GROUP BY HOST_ID       
       ) B
    ON A.HOST_ID IN B.HOST_ID
 ORDER BY ID
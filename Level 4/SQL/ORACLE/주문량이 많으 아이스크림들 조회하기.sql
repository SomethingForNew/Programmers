-- 주문량이 많은 아이스크림들 조회하기.sql

-- Oracle join
SELECT *
  FROM (
        SELECT A.FLAVOR
          FROM FIRST_HALF H
         INNER JOIN JULY J
            ON H.FLAVOR = J.FLAVOR
         GROUP BY H.FLAVOR
         ORDER BY SUM(H.TOTAL_ORDER) + SUM(J.TOTAL_ORDER) DESC
       )
WHERE ROWNUM <=3

-- ANSI join
SELECT *
  FROM (
        SELECT H.FLAVOR
          FROM FIRST_HALF H
             , JULY J
         WHERE H.FLAVOR = J.FLAVOR
         GROUP BY H.FLAVOR
         ORDER BY SUM(H.TOTAL_ORDER) + SUM(J.TOTAL_ORDER) DESC
       )
WHERE ROWNUM <=3
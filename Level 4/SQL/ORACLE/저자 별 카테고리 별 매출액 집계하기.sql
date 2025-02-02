-- 저자 별 카테고리 별 매출액 집계하기.sql

-- Oracle JOIN
SELECT A.AUTHOR_ID
     , B.AUTHOR_NAME
     , A.CATEGORY
     , SUM((A.PRICE * C.SALES)) AS SALES
  FROM BOOK A
     , AUTHOR B
     , BOOK_SALES C
 WHERE TO_CHAR(C.SALES_DATE, 'YYYYMM') = '202201'
   AND A.AUTHOR_ID = B.AUTHOR_ID
   AND A.BOOK_ID = C.BOOK_ID
 GROUP BY A.AUTHOR_ID, B.AUTHOR_NAME, A.CATEGORY
 ORDER BY A.AUTHOR_ID, A.CATEGORY DESC

 -- ANSI JOIN
 SELECT A.AUTHOR_ID
     , B.AUTHOR_NAME
     , A.CATEGORY
     , SUM((A.PRICE * C.SALES)) AS SALES
  FROM BOOK A
  JOIN AUTHOR B
    ON A.AUTHOR_ID = B.AUTHOR_ID
  JOIN BOOK_SALES C
    ON A.BOOK_ID = C.BOOK_ID
 WHERE TO_CHAR(C.SALES_DATE, 'YYYYMM') = '202201'
 GROUP BY A.AUTHOR_ID, B.AUTHOR_NAME, A.CATEGORY
 ORDER BY A.AUTHOR_ID, A.CATEGORY DESC
-- 오프라인, 온라인 판매 데이터 통합하기.sql

SELECT TO_CHAR(SALES_DATE, 'YYYY-MM-DD') AS SALES_DATE
     , PRODUCT_ID
     , USER_ID
     , SALES_AMOUNT
  FROM ONLINE_SALE
 WHERE TO_CHAR(SALES_DATE, 'YYYY-MM-DD') BETWEEN '2022-03-01' AND '2022-03-31'
 
 UNION ALL
 
 SELECT TO_CHAR(SALES_DATE, 'YYYY-MM-DD') AS SALES_DATE
     , PRODUCT_ID
     , NULL AS USER_ID
     , SALES_AMOUNT
  FROM OFFLINE_SALE
 WHERE TO_CHAR(SALES_DATE, 'YYYY-MM-DD') BETWEEN '2022-03-01' AND '2022-03-31'
 ORDER BY SALES_DATE ASC, PRODUCT_ID ASC, USER_ID ASC
-- 재구매가 일어난 상품과 회원 리스트 구하기.sql
SELECT
         A.USER_ID
       , A.PRODUCT_ID
  FROM ONLINE_SALE A
 GROUP BY A.USER_ID, A.PRODUCT_ID
HAVING COUNT(A.PRODUCT_ID) > 1
 ORDER BY A.USER_ID ASC, A.PRODUCT_ID DESC
 ;
-- 조건에 부합하는 중고거래 상태 조회하기.sql
SELECT BOARD_ID
     , WRITER_ID
     , TITLE
     , PRICE
     , CASE STATUS WHEN 'SALE' THEN '판매중'
                   WHEN 'RESERVED' THEN '예약중'
                   WHEN 'DONE' THEN '거래완료'
        END AS STATUS
    -- , DECODE(STATUS, 'SALE', '판매중', 'RESERVED', '예약중', 'DONE', '거래완료') AS STATUS
  FROM USED_GOODS_BOARD
 WHERE TO_CHAR(CREATED_DATE, 'YYYYMMDD') = '20221005'
 ORDER BY BOARD_ID DESC
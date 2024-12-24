-- 조회수가 가장 많은 중고거래 게시판의 첨부파일 조회하기.sql

-- Oracle 문법
-- SELECT '/home/grep/src/' || F.BOARD_ID || '/' || F.FILE_ID || F.FILE_NAME || F.FILE_EXT AS FILE_PATH
--   FROM USED_GOODS_BOARD B
--      , USED_GOODS_FILE F
--  WHERE B.VIEWS IN (
--                    SELECT MAX(VIEWS)
--                      FROM USED_GOODS_BOARD
--                   )
--    AND B.BOARD_ID = F.BOARD_ID
--  ORDER BY F.FILE_ID DESC
 
-- ANSI 문법
SELECT '/home/grep/src/' || F.BOARD_ID || '/' || F.FILE_ID || F.FILE_NAME || F.FILE_EXT AS FILE_PATH
  FROM USED_GOODS_BOARD B
  JOIN USED_GOODS_FILE F
    ON B.BOARD_ID = F.BOARD_ID
 WHERE B.VIEWS IN (
                   SELECT MAX(VIEWS)
                     FROM USED_GOODS_BOARD
                  )
 ORDER BY F.FILE_ID DESC
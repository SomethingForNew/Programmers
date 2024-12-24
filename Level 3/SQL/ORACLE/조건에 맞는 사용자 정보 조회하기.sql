-- 조건에 맞는 사용자 정보 조회하기.sql

/*
  최초 작성 답안
  상당히 더러움
*/ 
SELECT U.USER_ID
     , U.NICKNAME
     , U.CITY || ' ' || U.STREET_ADDRESS1 || ' ' || U.STREET_ADDRESS2 AS 전체주소
     , REGEXP_REPLACE(U.TLNO, '(.{3})(.+)(.{4})', '\1-\2-\3') AS 전화번호
  FROM USED_GOODS_BOARD B
  JOIN USED_GOODS_USER U
    ON B.WRITER_ID = U.USER_ID
 GROUP BY U.USER_ID
        , U.NICKNAME
        , U.CITY
        , U.STREET_ADDRESS1
        , U.STREET_ADDRESS2
        , U.TLNO
HAVING COUNT(U.USER_ID) >= 3
 ORDER BY U.USER_ID DESC


/*
  서브쿼리를 이용한 방법
*/
SELECT U.USER_ID
     , U.NICKNAME
     , U.CITY || ' ' || U.STREET_ADDRESS1 || ' ' || U.STREET_ADDRESS2 AS 전체주소
     , REGEXP_REPLACE(U.TLNO, '(.{3})(.+)(.{4})', '\1-\2-\3') AS 전화번호
  FROM USED_GOODS_USER U
 WHERE U.USER_ID IN (
                     SELECT WRITER_ID
                       FROM USED_GOODS_BOARD
                      GROUP BY WRITER_ID
                     HAVING COUNT(WRITER_ID) >= 3
                    )
 ORDER BY 1 DESC
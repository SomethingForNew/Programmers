-- 없어진 기록 찾기

-- OUTER JOIN 활용
SELECT O.ANIMAL_ID
     , O.NAME
  FROM ANIMAL_INS I
 RIGHT OUTER JOIN ANIMAL_OUTS O
    ON I.ANIMAL_ID = O.ANIMAL_ID
 WHERE I.ANIMAL_ID IS NULL
 ORDER BY O.ANIMAL_ID

-- 집합(MINUS) 활용
-- SELECT A.ANIMAL_ID
--      , A.NAME
--   FROM ANIMAL_OUTS A
-- MINUS
-- SELECT B.ANIMAL_ID
--      , B.NAME
--   FROM ANIMAL_INS B
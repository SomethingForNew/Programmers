-- 중복 제거하기.sql
-- COUNT 함수를 사용하면 NULL은 포함하지 않는다.
SELECT 
       COUNT(DISTINCT A.NAME) AS COUNT
  FROM ANIMAL_INS A
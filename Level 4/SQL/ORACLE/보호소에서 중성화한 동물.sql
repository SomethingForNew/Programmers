-- 보호소에서 중성화한 동물.sql

-- Oracle
SELECT O.ANIMAL_ID
     , O.ANIMAL_TYPE
     , O.NAME
  FROM (
          SELECT ANIMAL_ID
               , ANIMAL_TYPE
               , NAME
               , SEX_UPON_INTAKE
            FROM ANIMAL_INS 
           WHERE SEX_UPON_INTAKE LIKE 'Intact%'
          ORDER BY ANIMAL_ID
        ) I
     , ANIMAL_OUTS O
 WHERE I.ANIMAL_ID = O.ANIMAL_ID
   AND O.SEX_UPON_OUTCOME NOT LIKE 'Intact%'
 ORDER BY O.ANIMAL_ID


 -- ANSI
 SELECT O.ANIMAL_ID
     , O.ANIMAL_TYPE
     , O.NAME
  FROM (
          SELECT ANIMAL_ID
               , ANIMAL_TYPE
               , NAME
               , SEX_UPON_INTAKE
            FROM ANIMAL_INS 
           WHERE SEX_UPON_INTAKE LIKE 'Intact%'
          ORDER BY ANIMAL_ID
        ) I
  JOIN ANIMAL_OUTS O
    ON I.ANIMAL_ID = O.ANIMAL_ID
   AND O.SEX_UPON_OUTCOME NOT LIKE 'Intact%'
 ORDER BY O.ANIMAL_ID
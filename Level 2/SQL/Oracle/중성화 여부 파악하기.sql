-- 중성화 여부 파악하기
SELECT
        A.ANIMAL_ID
      , A.NAME
      , CASE WHEN SEX_UPON_INTAKE LIKE 'Neutered%' THEN 'O'
             WHEN SEX_UPON_INTAKE LIKE 'Spayed%'   THEN 'O'
                                                   ELSE 'X'
              END AS "중성화"
  FROM ANIMAL_INS A
 ORDER BY ANIMAL_ID
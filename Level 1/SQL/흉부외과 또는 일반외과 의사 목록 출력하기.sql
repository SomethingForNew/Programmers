SELECT 
       DR_NAME
      , DR_ID
      , MCDP_CD
      -- , TO_DATE(HIRE_YMD, 'YYYY-MM-DD') HIRE_YMD
      -- TO_DATE가 아니라 TO_CHAR를 이용해서 날짜형식을 바꾼다.
      , TO_CHAR(HIRE_YMD,'YYYY-MM-DD') AS HIRE_YMD
  FROM DOCTOR
 -- WHERE MCDP_CD = 'CS' OR MCDP_CD = 'GS'
 -- 조건을 OR 뿐만 아니라 IN으로도 가능하다.
 WHERE MCDP_CD IN ('CS','GS')
 ORDER BY HIRE_YMD DESC, DR_NAME ASC;
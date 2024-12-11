SELECT DISTINCT D.ID, D.EMAIL, D.FIRST_NAME, D.LAST_NAME
FROM DEVELOPERS D 
JOIN SKILLCODES S 
ON S.NAME IN ('Python', 'C#')
AND D.SKILL_CODE & S.CODE = S.CODE
ORDER BY 1

# SELECT
#     DISTINCT id,
#     email,
#     first_name,
#     last_name
# FROM
#     developers d
#     JOIN skillcodes s
#     ON s.name IN ('C#', 'Python')
#     AND d.skill_code & s.code = s.code
# ORDER BY
#     1
# 첫 풀이
def solution(id_pw, db):
    for account_info in db:
        if id_pw[0] in account_info:
            if id_pw[1] == account_info[1]:
                return "login"
            else:
                return "wrong pw"
    return "fail"


# 삼항연산자 활용 풀이
def solution(id_pw, db):
    for account_info in db:
        if id_pw[0] in account_info:
            return "login" if id_pw[1] == account_info[1] else "wrong pw"
    return "fail"
def solution(before, after):
    if sorted(before) == sorted(after):
        return 1
    else:
        return 0



'''
파이썬의 삼항연산자 사용
'''
def solution(before, after):
    return 1 if sorted(before)==sorted(after) else 0
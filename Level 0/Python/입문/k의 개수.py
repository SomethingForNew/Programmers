# 내 풀이
def solution(i, j, k):
    cnt = 0;

    for num in range(i,j+1):
        if str(k) in str(num):
            cnt += str(num).count(str(k))

    return cnt

# 다른 사람 풀이
def solution(i, j, k):
    return sum(map(lambda v: str(v).count(str(k)), range(i, j+1)))

'''
a = list(map(str, range(10)))

TODO: 파이썬 map 공부가 필요
'''
# 내 풀이
def solution(numlist, n):
    num_list = sorted(numlist, reverse = True)
    num_list = sorted(num_list, key = lambda x : abs(n - x))
    return num_list

# 다른 사람 풀이
def solution(numlist, n):
    answer = sorted(numlist, key = lambda x : (abs(x - n), n - x))
    return answer
# 내 풀이
import re

def solution(my_string):
    return sum([int(i) for i in re.findall('[0-9]+', my_string)])


'''
다른사람 풀이 (정규식 사용안한 방법)
'''
def solution(my_string):
    s = ''.join(i if i.isdigit() else ' ' for i in my_string)
    return sum(int(i) for i in s.split())
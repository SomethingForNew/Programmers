'''
js로 푼것을 기반하여 파이썬으로 풀이
'''
def solution(s):
    answer = 0
    tempArr = s.split(' ')
    
    for i in range(len(tempArr)):
        if tempArr[i] == 'Z':
            answer -= int(tempArr[i - 1])
        else:
            answer += int(tempArr[i])
            
    return answer

'''
다른 사람 풀이
TODO: 1. 반복문의 len안의 := 가 무엇인지 확인
      2. 삼항연산자 공부 필요
'''
def solution(s):
    answer = 0
    for i in range(len(s := s.split(" "))):
        answer += int(s[i]) if s[i] != "Z" else -int(s[i-1])
    return answer
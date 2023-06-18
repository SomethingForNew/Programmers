def solution(n):
    answer = []
    x = n
    
    while x != 1:
        answer.append(x)
        
        if x % 2 == 0:
            x = x / 2
        else:
            x = 3 * x + 1
    
    answer.append(1)
    
    return answer
         
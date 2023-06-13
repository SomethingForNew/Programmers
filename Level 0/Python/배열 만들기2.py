def solution(l, r):
    answer = []
    
    for i in range((l - 1) // 5 * 5 + 5, r + 1, 5):
        isFiveOrZero = True
        
        if "5" not in str(i) and "0" not in str(i):
            isFiveOrZero = False
        
        if isFiveOrZero:
            answer.append(i)
            
    return answer if len(answer) > 0 else [-1]
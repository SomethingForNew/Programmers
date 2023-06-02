def solution(arr, queries):
    answer = []
    
    for s, e, k in queries:
        tempArr = []
        
        for i in sorted(arr[s:e + 1]):
            if i > k:
                tempArr.append(i)
        
        if len(tempArr) != 0:
            answer.append(min(tempArr))
        else:
            answer.append(-1)
            
    return answer
def solution(n):
    answerArr = []

    if(n % 2 != 0):
        for i in range(n + 1):
            if(i % 2 != 0):
                answerArr.append(i)
        return sum(answerArr)
    else:
        for i in range(n + 1):
            if(i % 2 == 0):
                answerArr.append(i**2)
        return sum(answerArr)
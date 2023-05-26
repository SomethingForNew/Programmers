def solution(a, d, included):
    tempArr = [a]
    for i in range(len(included) - 1):
        tempArr.append(tempArr[i] + d)
    
    arr=[]
    for i in range(len(included)):
        arr.append([tempArr[i], included[i]])

    return sum([key for key, value in dict(arr).items() if value == True])
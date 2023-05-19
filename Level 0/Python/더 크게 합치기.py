def solution(a, b):
    aPlusb = str(a) + str(b)
    bPlusa = str(b) + str(a)
    
    if int(aPlusb) >= int(bPlusa):
        return int(aPlusb)
    else:
        return int(bPlusa)
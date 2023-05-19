def solution(a, b):
    aPlusb = int(str(a) + str(b))
    aTimesb = 2 * a * b
    return aPlusb if aPlusb >= aTimesb else aTimesb
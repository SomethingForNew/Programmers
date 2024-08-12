# import numpy as np

def solution(array):
    # array.sort()
    # return np.median(array)

    return sorted(array)[len(array) // 2]
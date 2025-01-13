# Python의 경우, 2차원 리스트에서 max()를 사용하면 리스트의 원소(리스트) 에서
# 0번째 index의 value가 가장 작은 원소(리스트)를 반환한다.

def solution(dots):
    x_shape = max(dots)[0] - min(dots)[0]
    y_shape = max(dots)[1] - min(dots)[1]
    
    return x_shape * y_shape
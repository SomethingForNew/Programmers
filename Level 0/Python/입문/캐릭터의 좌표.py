def solution(keyinput, board):
    coordinate = [0, 0]
    col = board[0]
    row = board[1]
    
    
    for str in keyinput:
        if str == 'left' and coordinate[0] - 1 >= -(col // 2):
            coordinate[0] -= 1
        elif str == 'right' and coordinate[0] + 1 <= (col // 2):
            coordinate[0] += 1
        elif str == 'up' and coordinate[1] + 1 <= (row // 2):
            coordinate[1] += 1
        elif str == 'down' and coordinate[1] - 1 >= -(row // 2):
            coordinate[1] -= 1
    
    return coordinate
def solution(my_string, is_suffix):
    answer = []
    
    for i in range(0, len(my_string)):
        answer.append(my_string[i:])

    if answer.count(is_suffix):
        return 1
    else:
        return 0
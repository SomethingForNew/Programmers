def solution(my_string, s, e):
    a = my_string[0:s]
    b = my_string[s : e + 1][::-1]
    c = my_string[e + 1 : len(my_string)]
    return a + b + c

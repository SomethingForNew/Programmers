def solution(my_string):
    answer = [0 for i in range(52)]

    for string in my_string:
        if string.isupper():
            ascii = 65
        else:
            ascii = 71

        answer[ord(string) - ascii] += 1
    return answer

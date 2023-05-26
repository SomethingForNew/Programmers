def solution(num_list):
    oddSum = list(map(str, filter(lambda x : x % 2 != 0, num_list)))
    evenSum = list(map(str, filter(lambda x : x % 2 == 0, num_list)))
    return int(''.join(oddSum)) + int(''.join(evenSum))
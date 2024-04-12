# 내 풀이
def solution(n):
    answer = [];
    a = 2;

    while(n >= 2):
        if(n % a == 0):
            answer.append(a);
            n = n / a;
        else:
            a += 1;

    return list(dict.fromkeys(answer));



# 다른 사람 풀이
def solution(n):
    answer = []
    d = 2
    while d <= n:
        if n % d == 0:
            n /= d
            if d not in answer:
                answer.append(d)
        else:
            d += 1
    return answer
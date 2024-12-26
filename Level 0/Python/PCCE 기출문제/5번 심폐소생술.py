cpr1 = ["call", "respiration", "repeat", "check", "pressure"]
cpr2 = ["respiration", "repeat", "check", "pressure", "call"]

def solution(cpr):
    answer = []
    basic_order = ["check", "call", "pressure", "respiration", "repeat"]

    for action in cpr:
        for i in range(len(basic_order)):
            if action == basic_order[i]:
                answer.append(i + 1)
    return answer
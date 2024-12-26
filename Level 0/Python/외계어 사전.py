def solution(spell, dic):
    for str in dic:
        if sorted(list(spell)) == sorted(str):
            return 1
    return 2
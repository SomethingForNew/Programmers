def solution(spell, dic):
    spell = sorted(spell)
    
    for str in dic:
        if spell == sorted(str):
            return 1
    return 2
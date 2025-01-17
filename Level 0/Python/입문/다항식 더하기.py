def solution(polynomial):
    xnum = 0
    num = 0
    temp_arr = polynomial.split(" + ")
    
    for element in temp_arr:
        if element.isdigit():
            num += int(element)
        else:
            xnum = xnum + 1 if element == 'x' else xnum + int(element[:-1])
    
    if xnum == 0:
        return f'{num}'
    elif xnum == 1 and num == 0:
        return f'x'
    elif xnum == 1 and num != 0:
        return f'x + {num}'
    elif xnum > 1 and num == 0:
        return f'{xnum}x'
    elif xnum > 1 and num != 0:
        return f'{xnum}x + {num}'
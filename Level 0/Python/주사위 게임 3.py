def solution(a, b, c, d):
    # 1------------------------------
    if a == b == c == d:
        return 1111 * a
    # 2------------------------------
    if d != a == b == c:
        return (10 * a + d) ** 2
    if c != a == b == d:
        return (10 * a + c) ** 2
    if b != a == c == d:
        return (10 * a + b) ** 2
    if a != b == c == d:
        return (10 * b + a) ** 2
    # 3------------------------------
    if a == b and c == d:
        return (a + c) * abs(a - c)
    if a == c and b == d:
        return (a + b) * abs(a - b)
    if a == d and b == c:
        return (a + b) * abs(a - b)
    
    if b == a and c == d:
        return (b + c) * abs(b - c)
    if b == c and a == d:
        return (b + a) * abs(b - a)
    if b == d and a == c:
        return (b + a) * abs(b - a)
    
    if c == a and b == d:
        return (c + b) * abs(c - b)
    if c == b and a == d:
        return (c + a) * abs(c - a)
    if c == d and a == b:
        return (c + a) * abs(c - a)
    
    if d == a and b == c:
        return (d + b) * abs(d - b)
    if d == b and a == c:
        return (d + a) * abs(d - a)
    if d == c and a == b:
        return (d + a) * abs(d - a)
    # 4------------------------------
    # if a == b and c != d:
    #     return c * d
    # if a == c and b != d:
    #     return b * d
    # if a == d and b != c:
    #     return c * b
    # if b == c and a != d:
    #     return a * d
    # if b == d and a != b:
    #     return a * b
    # if c == b and a != d:
    #     return a * d
    
    if a == b and c != d:
        return c * d
    if a == c and b != d:
        return b * d
    if a == d and b != c:
        return b * c
    
    if b == a and c != d:
        return c * d
    if b == c and a != d:
        return a * d
    if b == d and a != c:
        return a * c
    
    if c == a and b != d:
        return b * d
    if c == b and a != d:
        return a * d
    if c == d and a != b:
        return a * b
    
    if d == a and c != b:
        return c * b
    if d == b and a != c:
        return a * c
    if d == c and a != b:
        return a * b
    # 5------------------------------
    if a != b != c != d:
        return min(a, b, c ,d)
def solution(a, b, c, d):
    nums = [a, b, c, d]
    temp = list(map(int, set(nums)))

    if len(temp) == 1:
        return 1111 * temp[0]

    if len(temp) == 2:
        if nums.count(max(temp)) == 3:
            return (10 * temp[1] + temp[0]) ** 2

        if nums.count(max(temp)) == 2:
            return (temp[1] + temp[0]) * abs(temp[1] - temp[0])

    if len(list(set(nums))) == 3:
        return temp[1] * temp[2]

    if len(list(set(nums))) == 4:
        return min(nums)


print(solution(6, 3, 3, 6))

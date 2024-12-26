number = int(input())

answer = 0

# 1
# for i in range(len(str(number)) // 2):
#     answer += number % 100
#     number //= 100
# 2
while number > 0:
    answer += number % 100
    number //= 100

print(answer)
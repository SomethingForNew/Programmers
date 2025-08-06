# ### 정수/문자열 입력받기
# N = int(input()) # 1
# S = input() #S


# ### 한줄 정수/문자열 리스트 입력받기 -> 1 2 3 4
# li = list(map(int, input().split())) # [1, 2, 3, 4]
# li = list(map(str, input().split())) # ['str1', 'str2', 'str3']

 
# ### 여러개 정수/문자열 입력받기
# a,b,c = map(int, input().split())
# a,b,c = map(str, input().split())


# ### 여러 줄의 정수 리스트 입력받기
# n = int(input())
# li = [int(input()) for _ in range(n)]
# ## n 없이 한 줄로
# li = [int(input()) for _ in range(int(input()))]
 

# ### N행 배열 입력받기
# #### 숫자인 경우
# N=int(input()) # N개의 행
# arr=[[*map(int,input().split())] for _ in range(N)]


# #### 문자열인 경우
# N=int(input()) # N개의 행
# arr=[list(input()) for _ in range(N)]


# ## 입력 빠르게하기
import sys
input=sys.stdin.readline() # 위의 input()을 sys.stdin.realine 으로 바꾸기

# li = list(map(int, sys.stdin.readline.split())) # [1, 2, 3, 4]

li = list(map(int, input.split()))
print(li)

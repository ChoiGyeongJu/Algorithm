from collections import deque
import sys

input = sys.stdin.readline

a, b = map(int, input().split())

answer = []
def dfs(current, target, cnt):
    if current == target:
        answer.append(cnt)
        return
    if current > target:
        return
    dfs(current * 2, target, cnt + 1)
    dfs(current * 10 + 1, target, cnt + 1)
        
dfs(a, b, 0)

if answer:
    print(min(answer) + 1)
else:
    print(-1)
import copy
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
nums = list(map(int, input().split()))
# nums에서 m개의 수를 골라서 비내림차순인것 출력

visited = [False] * n

def isValid(num, x):
    if len(num) == 0:
        return True
    if num[-1] <= x:
        return True
    return False

answer = []
def dfs(num):
    if len(num) == m:
        a = copy.deepcopy(num)
        if a not in answer:
            answer.append(a)
        return
    for i in range(n):
        if not visited[i] and isValid(num, nums[i]):
            visited[i] = True
            num.append(nums[i])
            dfs(num)
            num.pop()
            visited[i] = False

dfs([])
answer.sort()
for a in answer:
    print(*a)
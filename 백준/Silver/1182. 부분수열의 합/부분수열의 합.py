import sys

input = sys.stdin.readline

n, s = map(int, input().split())
nums = list(map(int, input().split()))

cnt = 0

def dfs(val, idx):
    global cnt
    if idx == n:
        return

    if val + nums[idx] == s:
        cnt += 1

    dfs(val + nums[idx], idx + 1)
    dfs(val, idx + 1)    

dfs(0, 0)
print(cnt)
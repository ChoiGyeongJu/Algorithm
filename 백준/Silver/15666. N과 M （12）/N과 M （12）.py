import sys

input = sys.stdin.readline

n, m = map(int, input().split())
arr = set(map(int, input().split()))
nums = sorted(arr)

def dfs(ans, idx):
    if len(ans) == m:
        print(*ans)
        return
    
    for i in range(idx, len(nums)):
        ans.append(nums[i])
        dfs(ans, i)
        ans.pop()

dfs([], 0)
import sys

input = sys.stdin.readline

def dfs(depth, idx):
    if depth == 6:
        print(*out)
        return
    
    for i in range(idx, k):
        out.append(S[i])
        dfs(depth + 1, i + 1)
        out.pop()

while True:
    nums = list(map(int, input().split()))
    if nums == [0]: break
    k = nums[0]
    S = nums[1:]
    out = []

    dfs(0, 0)
    print()
    
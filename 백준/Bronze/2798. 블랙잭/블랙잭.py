import sys

n, m = map(int, sys.stdin.readline().split())
# m을 넘지 않는 세장의 합
nums = list(map(int, sys.stdin.readline().split()))

ans = 0
for i in range(n - 2):
    value = nums[i]
    for j in range(i + 1, n - 1):
        for k in range(j + 1, n):
            new = value + nums[j] + nums[k]
            if (new <= m):
                ans = max(ans, value + nums[j] + nums[k])

print(ans)
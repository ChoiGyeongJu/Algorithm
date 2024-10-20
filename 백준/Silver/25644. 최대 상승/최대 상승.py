import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

dp = [[arr[0], 0] for _ in range(n)]

for i in range(1, n):
    value = arr[i] - dp[i - 1][0]
    dp[i] = [min(dp[i - 1][0], arr[i]), max(value, 0)]

dp.sort(key=lambda x: -x[1])
print(dp[0][1])
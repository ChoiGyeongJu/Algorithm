import sys

input = sys.stdin.readline

T = int(input())

mod = 1000000009

dp = [[0]*3 for _ in range(100001)]

dp[1] = [1, 0, 0]
dp[2] = [0, 1, 0]
dp[3] = [1, 1, 1]

for i in range(4, len(dp)):
    dp[i][0] = dp[i - 1][1] % mod + dp[i - 1][2] % mod
    dp[i][1] = dp[i - 2][0] % mod + dp[i - 2][2] % mod
    dp[i][2] = dp[i - 3][0] % mod + dp[i - 3][1] % mod

for _ in range(T):
    n = int(input())
    print(sum(dp[n]) % mod)
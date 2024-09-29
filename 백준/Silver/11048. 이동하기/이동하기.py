import sys
n, m = map(int, sys.stdin.readline().split())

dp = []
for _ in range(n):
    dp.append(list(map(int, sys.stdin.readline().split())))

for i in range(1, m):
    dp[0][i] = dp[0][i] + dp[0][i - 1]

for i in range(1, n):
    for j in range(m):
        if (j == 0):
            dp[i][j] = dp[i - 1][j] + dp[i][j]
        else:
            dp[i][j] = max(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + dp[i][j]
print(dp[-1][-1])
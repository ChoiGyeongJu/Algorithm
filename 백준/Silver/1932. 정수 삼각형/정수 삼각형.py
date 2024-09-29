import sys
n = int(sys.stdin.readline())
dp = []
for _ in range(n):
    dp.append(list(map(int, sys.stdin.readline().split())))

for i in range(1, n):
    for j in range(len(dp[i])):
        if (j == 0):
            dp[i][j] = dp[i - 1][j] + dp[i][j]
        elif (j == len(dp[i]) - 1):
            dp[i][j] = dp[i - 1][-1] + dp[i][j]
        else:
            dp[i][j] = max(dp[i - 1][j - 1], dp[i - 1][j]) + dp[i][j]

print(max(dp[-1]))
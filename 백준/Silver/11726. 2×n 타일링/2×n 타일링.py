import sys
n = int(sys.stdin.readline())

dp = [0] * (n + 1)


for i in range(n + 1):
    if (i < 3): dp[i] = i
    else:
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007 

print(dp[n])
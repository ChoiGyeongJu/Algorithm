import sys
n = int(sys.stdin.readline())

dp = [0] * (n + 1)
arr = [0] * (n + 1)

for i in range(1, n + 1):
    arr[i] = int(input())

if (n < 3):
    print(sum(arr[0:n+1]))
    exit()

dp[1] = arr[1]
dp[2] = arr[1] + arr[2]

for i in range(3, n + 1):
    dp[i] = max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i])

print(dp[n])
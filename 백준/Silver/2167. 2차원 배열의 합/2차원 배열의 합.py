import sys
input = sys.stdin.readline

n, m = map(int, input().split())
A = []
for _ in range(n):
    A.append(list(map(int, input().split())))

k = int(input())
command = []
for _ in range(k):
    i, j, x, y = list(map(int, input().split()))
    command.append([(i-1, j-1), (x-1, y-1)]) 

dp = [[0] * (m + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
    for j in range(1, m + 1):
        dp[i][j] = A[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]

for (i, j), (x, y) in command:
    result = dp[x+1][y+1] - dp[i][y+1] - dp[x+1][j] + dp[i][j]
    print(result)

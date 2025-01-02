import sys
input = sys.stdin.readline

n = int(input())
grid = []
for _ in range(n):
    grid.append(list(map(int, input().split())))

# DP 배열 초기화
dp = [[[0] * 3 for _ in range(n)] for _ in range(n)]
dp[0][1][0] = 1  # (1, 2)에 가로 방향으로 시작

# DP 점화식 계산
for x in range(n):
    for y in range(2, n):  # (1, 2)에서 시작하므로 y는 2부터
        if grid[x][y] == 1:  # 벽인 경우는 스킵
            continue

        # 가로 방향 이동
        dp[x][y][0] = dp[x][y-1][0] + dp[x][y-1][2]

        # 세로 방향 이동
        dp[x][y][1] = dp[x-1][y][1] + dp[x-1][y][2]

        # 대각선 이동
        if grid[x-1][y] == 0 and grid[x][y-1] == 0:
            dp[x][y][2] = dp[x-1][y-1][0] + dp[x-1][y-1][1] + dp[x-1][y-1][2]

# 결과 출력
print(dp[n-1][n-1][0] + dp[n-1][n-1][1] + dp[n-1][n-1][2])
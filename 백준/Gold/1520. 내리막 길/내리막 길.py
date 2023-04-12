import sys
input = sys.stdin.readline

n, m = map(int, input().split())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

visited = [[False for _ in range(m)] for _ in range(n)]
dp = [[-1 for _ in range(m)] for _ in range(n)]


def dfs(x, y):
    if x == n - 1 and y == m - 1:
        return 1
    
    if dp[x][y] == -1:
        dp[x][y] = 0
        for i in range(4):
            nx, ny = dx[i] + x, dy[i] + y

            if 0 <= nx < n and 0 <= ny < m:
                if graph[nx][ny] < graph[x][y]:
                    dp[x][y] += dfs(nx, ny)

    return dp[x][y]

dfs(0, 0)
print(dp[0][0])
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
grid = []
for _ in range(n):
    grid.append(list(map(int, input().split())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

visited = [[False]*m for _ in range(n)]

answer = 0 
def dfs(x, y, cnt, value):
    global answer

    if cnt == 4:
        answer = max(answer, value)
        return
    for i in range(4):
        nx, ny = dx[i] + x, dy[i] + y
        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
            if cnt == 2:
                # ㅗ모양에 대한 처리
                visited[nx][ny] = True
                dfs(x, y, cnt + 1, value + grid[nx][ny])
                visited[nx][ny] = False

            visited[nx][ny] = True
            dfs(nx, ny, cnt + 1, value + grid[nx][ny])
            visited[nx][ny] = False

for i in range(n):
    for j in range(m):
        visited[i][j] = True
        dfs(i, j, 1, grid[i][j])
        visited[i][j] = False
print(answer)
from collections import deque
import sys
input = sys.stdin.readline

m, n = map(int, input().split())
grid = []
for _ in range(n):
    grid.append(list(map(int, input().split())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

queue = deque([])
for i in range(n):
    for j in range(m):
        if grid[i][j] == 1:
            queue.append((i, j))

while queue:
    x, y = queue.popleft()
    for i in range(4):
        nx, ny = dx[i] + x, dy[i] + y
        if 0 <= nx < n and 0 <= ny < m:
            if grid[nx][ny] == 0:
                grid[nx][ny] = grid[x][y] + 1
                queue.append((nx, ny))

ans = 0
for i in range(n):
    if 0 in grid[i]:
        print(-1)
        exit()
    ans = max(max(grid[i]), ans)
print(ans - 1)
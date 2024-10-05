from collections import deque

n = int(input())
graph1 = []
graph2 = []
for _ in range(n):
    rgb = input().rstrip()
    graph1.append(list(rgb))
    graph2.append(list(rgb.replace('R', 'G')))

visited1 = [[False] * n for _ in range(n)]
visited2 = [[False] * n for _ in range(n)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
# r/g/b  r+g/b
def bfs(graph, x, y, visited):
    queue = deque([])
    queue.append([x, y])
    visited[x][y] = True

    while queue:
        a, b = queue.popleft()
        for i in range(4):
            nx = dx[i] + a
            ny = dy[i] + b
            if 0 <= nx < n and 0 <= ny < n:
                if (graph[a][b] == graph[nx][ny] and not visited[nx][ny]):
                    queue.append([nx, ny])
                    visited[nx][ny] = True

ans1 = 0
ans2 = 0
for i in range(n):
    for j in range(n):
        if not visited1[i][j]:
            bfs(graph1, i, j, visited1)
            ans1 += 1
        if not visited2[i][j]:
            bfs(graph2, i, j, visited2)
            ans2 += 1

print(ans1, ans2, sep=' ')
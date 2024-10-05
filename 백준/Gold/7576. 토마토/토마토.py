from collections import deque

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

m, n = map(int, input().split())

graph = []
for _ in range(n):
    arr = list(map(int, input().split()))
    graph.append(arr)

queue = deque([])
for i in range(n):
    for j in range(m):
        if (graph[i][j] == 1):
            queue.append([i, j])

while queue:
    a, b = queue.popleft()

    for i in range(4):
        nx = dx[i] + a
        ny = dy[i] + b
        if nx < 0 or nx >= n or ny < 0 or ny >= m:
            continue
        if graph[nx][ny] == 0:
            graph[nx][ny] = graph[a][b] + 1
            queue.append([nx, ny])

 
ans = 0
for i in range(n):
    if 0 in graph[i]:
        print(-1)
        exit()
    ans = max(max(graph[i]), ans)
print(ans - 1)
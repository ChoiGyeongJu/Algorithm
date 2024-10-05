from collections import deque
import sys

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

n = int(sys.stdin.readline())
graph = []

for i in range(n):
    arr = list(map(int, sys.stdin.readline().rstrip()))
    graph.append(arr)

def bfs(graph, x, y):
    cnt = 0
    queue = deque([])
    queue.append([x, y])
    graph[x][y] = 0

    while queue:
        cnt += 1
        a, b = queue.popleft()

        for i in range(4):
            nx = dx[i] + a
            ny = dy[i] + b

            if nx < 0 or nx >= n or ny < 0 or ny >= n:
                continue
            if graph[nx][ny] == 1:
                queue.append([nx, ny])
                graph[nx][ny] = 0
    return cnt

ans = []
for i in range(n):
    for j in range(n):
        if (graph[i][j] == 1):
            ans.append(bfs(graph, i, j))

ans.sort()
print(len(ans))
for a in ans:
    print(a, sep='')
import sys
from collections import deque

dx = [0,0,1,-1]
dy = [1,-1,0,0]

T = int(sys.stdin.readline())

for _ in range(T):
    n, m, k = map(int, sys.stdin.readline().split())
    graph = [[0 for _ in range(m)] for _ in range(n)]
    for _ in range(k):
        x, y = map(int, sys.stdin.readline().split())
        graph[x][y] = 1

    cnt = 0
    def bfs(graph, x, y):
        global cnt
        queue = deque([])
        queue.append([x, y])
        graph[x][y] = 0

        while queue:
            a, b = queue.popleft()
            for i in range(4):
                nx = a + dx[i]
                ny = b + dy[i]
                if nx  < 0 or nx >= n or ny < 0 or ny >= m:
                    continue
                if (graph[nx][ny] == 1):
                    graph[nx][ny] = 0
                    queue.append([nx, ny])

    for i in range(n):
        for j in range(m):
            if (graph[i][j] == 1):
                bfs(graph, i, j)
                cnt += 1

    print(cnt)

from itertools import combinations
from collections import deque
import copy
import sys

n, m = map(int, sys.stdin.readline().split())
graph = []
for _ in range(n):
    arr = list(map(int, sys.stdin.readline().split()))
    graph.append(arr)

# 0은 빈칸, 1은 벽, 2는 바이러스 / 0의 최대값 구하기
void_list = []
for i in range(n):
    for j in range(m):
        if (graph[i][j] == 0):
            void_list.append([i, j])

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs(graph):
    queue = deque([])
    for i in range(n):
        for j in range(m):
            if (graph[i][j] == 2):
                queue.append([i, j])

    while queue:
        a, b = queue.popleft()

        for i in range(4):
            nx = dx[i] + a
            ny = dy[i] + b
            if 0 <= nx < n and 0 <= ny < m:
                if graph[nx][ny] == 0:
                    graph[nx][ny] = 2
                    queue.append([nx, ny])
    cnt = 0
    for i in range(n):
        for j in range(m):
            if (graph[i][j] == 0):
                cnt += 1
    return cnt

ans = 0
for a in combinations(void_list, 3):
    copy_graph = copy.deepcopy(graph)
    for x, y in list(a):
        copy_graph[x][y] = 1
    ans = max(bfs(copy_graph), ans)

print(ans)
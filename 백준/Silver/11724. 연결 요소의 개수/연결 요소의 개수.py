from collections import deque
import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

n, m = map(int, input().split())
grid = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, input().split())
    grid[u].append(v)
    grid[v].append(u)

visited = [False] * (n + 1)
visited[0] = True
def dfs(v):
    if not visited[v]:
        visited[v] = True
        for next in grid[v]:
            dfs(next)

answer = 0
for i in range(1, n + 1):
    if not visited[i]:
        dfs(i)
        answer += 1

print(answer)
import sys
sys.setrecursionlimit(100000)

n = int(input())
graph = [[] for _ in range(n + 1)]

for _ in range(n - 1):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

visited = [False] * (n + 1)

ans = [0] * (n + 1)
def dfs(graph, v):
    visited[v] = True

    for node in graph[v]:
        if not visited[node]:
            visited[node] = True
            ans[node] = v
            dfs(graph, node)
dfs(graph, 1)
for i in range(2, n + 1):
    print(ans[i])
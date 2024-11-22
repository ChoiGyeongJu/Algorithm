import sys
input = sys.stdin.readline

n, m = map(int, input().split())
grid = [[] for _ in range(n)]

for _ in range(m):
    a, b = map(int, input().split())
    grid[a].append(b)
    grid[b].append(a)

# 한 노드에서 출발해서, 5개의 경로로 이동이 가능하면 1, 아니면 0 출력
def dfs(node, visited):
    if len(visited) == 5:
        print(1)
        exit()
    for next in grid[node]:
        if next not in visited:
            visited.add(next)
            dfs(next, visited)
            visited.remove(next)
            
for i in range(n):
    visited = set()
    visited.add(i)
    dfs(i, visited)

print(0)
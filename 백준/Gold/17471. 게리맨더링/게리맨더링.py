from collections import deque
from itertools import combinations

n = int(input())
people = list(map(int, input().split()))

graph = [[] for _ in range(n + 1)]
for i in range(1, n + 1):
    info = list(map(int, input().split()))

    for j in range(info[0]):
        graph[i].append(info[j + 1])


def bfs(arr):
    q = deque([arr[0]])
    visited = set()
    visited.add(arr[0])

    cost = 0

    while q:
        x = q.popleft()
        cost += people[x - 1]

        for next in graph[x]:
            if next not in visited and next in arr:
                q.append(next)
                visited.add(next)
    
    if len(visited) == len(arr):
        return [True, cost]
    else:
        return [False]

num = [i for i in range(1, n + 1)]

answer = float('inf')

for i in range(1, n // 2 + 1):
    for com in combinations(num, i):
        group1 = list(com)
        group2 = [j for j in range(1, n + 1) if j not in group1]

        a = bfs(group1)
        b = bfs(group2)

        if a[0] and b[0]:
            answer = min(answer, abs(a[1] - b[1]))

if answer == float('inf'):
    print(-1)
else:
    print(answer)
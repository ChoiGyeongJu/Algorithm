import sys
import heapq

INF = 10e9
input = sys.stdin.readline

n, m, r = map(int, input().split())
graph = [[] for _ in range(n + 1)]

items = list(map(int, input().split()))
for _ in range(r):
    a, b, l = map(int, input().split())
    graph[a].append((b, l))
    graph[b].append((a, l))

def dijkstra(start):
    q = []
    distance = [INF] * (n + 1)
    heapq.heappush(q, (start, 0))
    distance[start] = 0

    while q:
        now, dist = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for to, cost in graph[now]:
            new_cost = cost + distance[now]
            if new_cost < distance[to]:
                distance[to] = new_cost
                heapq.heappush(q, (to, new_cost))
    
    cnt = 0
    for i in range(1, n + 1):
        if distance[i] <= m:
            cnt += items[i - 1]
    return cnt

ans = 0
for i in range(1, n + 1):
    ans = max(ans, dijkstra(i))
print(ans)
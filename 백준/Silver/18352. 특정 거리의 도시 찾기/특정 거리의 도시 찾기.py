import sys
import heapq

INF = 10e9
input = sys.stdin.readline

n, m, k, x = map(int, input().split())
graph = [[] for _ in range(n + 1)]
distance = [INF] * (n + 1)

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append((b, 1))


def dijkstra(start):
    q = []
    distance[start] = 0
    heapq.heappush(q, (0, start))

    while q:
        dist, now = heapq.heappop(q)

        if distance[now] < dist:
            continue
        for to, cost in graph[now]:
            new_cost = cost + distance[now]
            if new_cost < distance[to]:
                distance[to] = new_cost
                heapq.heappush(q, (new_cost, to))

dijkstra(x)

if k not in distance:
    print(-1)
else:
    for i in range(1,  len(distance)):
        if distance[i] == k:
            print(i)

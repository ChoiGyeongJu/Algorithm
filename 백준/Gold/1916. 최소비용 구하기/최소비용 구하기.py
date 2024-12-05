import heapq
import sys
input = sys.stdin.readline
INF = 10e9

n = int(input())
m = int(input())

distance = [INF] * (n + 1)
graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c)) # b로 가는 비용 c
    
start, end = map(int, input().split())


def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start)) # 비용, 노드
    distance[start] = 0
    
    while q:
        dist, now = heapq.heappop(q)
        if (distance[now] < dist):
            continue
        for to, cost in graph[now]:
            new_cost = cost + distance[now]
            if new_cost < distance[to]:
                distance[to] = new_cost
                heapq.heappush(q, (new_cost, to))

dijkstra(start)
print(distance[end])
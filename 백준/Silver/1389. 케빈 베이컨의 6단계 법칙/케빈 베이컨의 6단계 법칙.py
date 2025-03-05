import heapq
n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append((b, 1))
    graph[b].append((a, 1))

def dijkstra(start):
    distance = [float('inf')] * (n + 1)
    distance[start] = 0

    q = []
    heapq.heappush(q, (0, start))

    while q:
        dist, node = heapq.heappop(q)

        if distance[node] < dist:
            continue

        for next in graph[node]:
            cost = distance[node] + next[1]
            if cost < distance[next[0]]:
                distance[next[0]] = cost
                heapq.heappush(q, (cost, next[0]))

    return sum(distance[1:])

answer = float('inf')
result = 0
for i in range(1, n + 1):
    tmp = dijkstra(i)
    if tmp < answer:
        answer = tmp
        result = i

print(result)
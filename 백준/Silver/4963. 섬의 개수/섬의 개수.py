from collections import deque

answer = []
while True:
    w, h = map(int, input().split())  # 너비 w, 높이 h
    if w == 0 and h == 0:
        break

    graph = []

    for i in range(h):
        arr = list(map(int, input().split()))
        graph.append(arr)

    cnt = 0

    def bfs(graph, x, y):
        global cnt
        queue = deque([(x, y, cnt)])
        graph[x][y] = 0

        while queue:
            x, y, cnt = queue.popleft()

            adj = [(x + 1, y), (x, y + 1), (x - 1, y), (x, y - 1),
                (x - 1, y - 1), (x + 1, y + 1), (x - 1, y + 1), (x + 1, y - 1)
            ]

            for jump in adj:
                x_idx = jump[0]
                y_idx = jump[1]

                if not (0 <= x_idx <= h - 1) or not (0 <= y_idx <= w - 1): 
                    continue
                elif graph[x_idx][y_idx] == 1:
                    graph[x_idx][y_idx] = 0
                    queue.append((x_idx, y_idx, cnt))            
            
        cnt += 1
        return cnt

    for i in range(h):
        for j in range(w):
            if graph[i][j] == 1:
                bfs(graph, i, j)

    answer.append(cnt)

for x in answer:
    print(x, end='\n')
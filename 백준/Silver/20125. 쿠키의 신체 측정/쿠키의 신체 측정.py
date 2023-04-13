import sys
input = sys.stdin.readline

n = int(input())

graph = []
for _ in range(n):
    graph.append(list(input()))
    
heart = []
for i in range(1, n - 1):
    for j in range(1, n - 1):
        if graph[i][j] == '*':
            if graph[i - 1][j] == '*' and graph[i][j - 1] == '*' and graph[i][j + 1] == '*' and graph[i + 1][j] == '*':
                heart = [i, j]
                break
    if len(heart) > 0:
        break

print(heart[0] + 1, heart[1] + 1)


arm = graph[heart[0]]
left_arm = list(arm[:heart[1]]).count('*')
right_arm = list(arm).count('*') - left_arm - 1

body = -2
left_leg = -1
right_leg = -1
for i in range(n):
    if graph[i][heart[1]] == '*':
        body += 1

    if graph[i][heart[1] - 1] == '*':
        left_leg += 1
    
    if graph[i][heart[1] + 1] == '*':
        right_leg += 1

print(left_arm, right_arm, body, left_leg, right_leg, sep=' ')
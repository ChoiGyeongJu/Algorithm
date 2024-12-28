n = int(input())

arr = list(map(int, input().split()))
del_node = int(input())


def dfs(v):
    arr[v] = -2
    for i in range(n):
        if arr[i] == v:
            dfs(i)

dfs(del_node)
answer = 0

for i in range(n):
    if arr[i] != -2 and i not in arr:
        answer += 1

print(answer)
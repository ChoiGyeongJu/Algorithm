import sys
input = sys.stdin.readline


k = int(input())
arr = list(input().split())

visited = [False] * 10

answer = []

def isValid(a, b, oper):
    if oper == '<' and a < b:
        return True
    if oper == '>' and a > b:
        return True
    return False

def dfs(idx, num):
    if idx == k + 1:
        answer.append(num)
        return
    for i in range(10):
        if not visited[i]:
            if idx == 0 or isValid(num[-1], str(i), arr[idx - 1]):
                visited[i] = True
                dfs(idx + 1, num + str(i))
                visited[i] = False

dfs(0, '')
answer.sort()
print(answer[-1], answer[0], sep='\n')
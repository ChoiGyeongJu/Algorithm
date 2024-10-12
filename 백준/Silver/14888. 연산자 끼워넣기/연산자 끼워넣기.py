import sys

input = sys.stdin.readline

n = int(input())
numList = list(map(int, input().split()))
commands = list(map(int, input().split())) # 더하기, 빼기, 곱하기, 나누기 수


res = []
def dfs(value, cnt, cal):
    if sum(cal) == 0:
        res.append(value)
        return res

    if cal[0] > 0:
        cal[0] -= 1
        dfs(value + numList[cnt], cnt + 1, cal)
        cal[0] += 1
    if cal[1] > 0:
        cal[1] -= 1
        dfs(value - numList[cnt], cnt + 1, cal)
        cal[1] += 1
    if cal[2] > 0:
        cal[2] -= 1
        dfs(value * numList[cnt], cnt + 1, cal)
        cal[2] += 1
    if cal[3] > 0:
        cal[3] -= 1
        if value < 0:
            dfs((abs(value) // numList[cnt]) * -1, cnt + 1, cal)
        else:
            dfs(value // numList[cnt], cnt + 1, cal)
        cal[3] += 1
    return res

dfs(numList[0], 1, commands)
print(max(res), min(res), sep='\n')
import sys
import copy
input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

def combinations(arr, k):
    result = []
    def comb(start, m):
        if len(m) == k:
            result.append(copy.deepcopy(m))
            return
        for i in range(start, n):
            m.append(arr[i])
            comb(i + 1, m)
            m.pop()
    comb(0, [])
    return result
answer = combinations(arr, m)
for a in answer:
    print(*a)
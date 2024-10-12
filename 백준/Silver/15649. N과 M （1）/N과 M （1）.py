from itertools import permutations
import sys

input = sys.stdin.readline

n, m = map(int, input().split())
arr = [i for i in range(1, n + 1)]

for a in permutations(arr, m):
    print(*a)
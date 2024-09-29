import math
import sys
n = int(sys.stdin.readline())

for _ in range(n):
    a, b = map(int, input().split())

    print(math.comb(b, a))
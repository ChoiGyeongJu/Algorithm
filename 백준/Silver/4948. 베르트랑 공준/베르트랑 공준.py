import sys
input = sys.stdin.readline

def sieve_count(n):
    l = 2 * n
    sieve = [True] * (l + 1)
    sieve[0] = sieve[1] = False

    for i in range(2, int(l ** 0.5) + 1):
        if sieve[i]:
            for j in range(i * i, l + 1, i):
                sieve[j] = False
    return len([i for i in range(n + 1, l + 1) if sieve[i]])

while True:
    n = int(input())
    if n == 0:
        break

    print(sieve_count(n))

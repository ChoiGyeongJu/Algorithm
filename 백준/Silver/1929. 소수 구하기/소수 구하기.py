m, n = map(int, input().split())

def prime_list(num):
    arr = [True] * (num + 1)
    m = int(num ** 0.5)
    
    for i in range(2, m + 1):
        if arr[i]:
            for j in range(i + i, num + 1, i):
                arr[j] = False

    return [i for i in range(2, num + 1) if arr[i] == True]

prime = prime_list(n)
for i in range(len(prime)):
    if prime[i] >= m:
        print(prime[i])
from bisect import bisect_left
t = int(input())

for _ in range(t):
    n = int(input())
    A = list(map(int, input().split()))
    A.sort()

    m = int(input())
    B = list(map(int, input().split()))

    for num in B:
        idx = bisect_left(A, num)

        if idx >= n:
            print(0)

        else:
            if A[idx] == num:
                print(1)
            else:
                print(0)
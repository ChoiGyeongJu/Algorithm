while True:
    arr = list(map(int, input().split()))
    if arr == [0, 0, 0]:
        break
    arr.sort()
    a, b, c = arr
    if c >= a + b:
        print('Invalid')
        continue

    if a == b and b == c:
        print('Equilateral')

    elif a != b and b != c and a != c:
        print('Scalene')
    
    else:
        print('Isosceles')
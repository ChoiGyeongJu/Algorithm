n = int(input())
arr = list(map(int, input().split()))
result = [0]

def bin_search(target, start, end):
    while start <= end:
        mid = (start + end) // 2

        if result[mid] < target:
            start = mid + 1

        else:
            end = mid - 1

    return start

for i in arr:
    if result[-1] < i:
        result.append(i)

    else:
        result[bin_search(i, 0, len(result) - 1)] = i

print(len(result) - 1)
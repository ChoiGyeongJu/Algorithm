n = input()

arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for i in arr:
    n = n.replace(i, '*')

print(len(n))

def solution(routes):
    camera = []
    routes.sort(key=lambda x: (x[1]))
    print(routes)
    for route in routes:
        start, end = route
        if len(camera) == 0:
            camera.append(end)
        else:
            pos = camera[-1]
            if start <= pos <= end:
                continue
            else:
                camera.append(end)
    return len(camera)

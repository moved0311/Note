## enumerate

```py
nums = [1, 6, 4, 2]

for index, num in enumerate(nums):
    print(index, num)
```


## 二分搜尋
```py
import bisect

nums = [1, 2, 4, 6, 8, 9]

bisect.bisect_right(nums, 6) # 4
bisect.bisect_left(nums, 6)  # 3
```
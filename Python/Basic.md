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

## Counter 
```py
from collections import Counter

nums = [1, 2, 2, 3, 3, 4, 3, 4, 1, 4, 4, 4]

num, freq = Counter(nums).most_common(1)[0]

print(num, freq) # 4, 5
```
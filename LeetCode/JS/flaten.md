```ts
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n == 0) return arr;

  const res: MultiDimensionalArray = [];

  arr.forEach((item) => {
    if (typeof item === "number") res.push(item);

    if (Array.isArray(item)) res.push(...flat(item, n - 1));
  });

  return res;
};

```

* [2625. Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/description/?utm_campaign=PostD22&utm_medium=Post&utm_source=Post&gio_link_id=rREX6Gm9)


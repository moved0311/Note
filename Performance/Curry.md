假設function的參數大量重複,可以用curry把一些相同的部分記住,另外創一個function,方便簡化相同的參數
```js
function curry(func, arity = func.length) {
  return function curried(...args) {
    if (args.length >= arity) return func(...args);
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}
```
```js
// Define the function that calculates the distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Create a curried version of the function that only requires one of the points
const distanceFromOrigin = curry(distance, 3)(0, 0);

// Call the curried function with the other point
const d1 = distanceFromOrigin(1, 1);
const d2 = distanceFromOrigin(2, 2);
```
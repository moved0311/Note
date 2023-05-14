```js
function curry(fn) {
    const len = fn.length;
    let inputs = [];

    return function curried(...args) {
        inputs.push(...args)
        if(len === inputs.length) return fn(...inputs)

        return curried
    };
};
```

[2632. Curry]([Curry - LeetCode](https://leetcode.com/problems/curry/description/?utm_campaign=PostD10&utm_medium=Post&utm_source=Post&gio_link_id=QRekxgjo))

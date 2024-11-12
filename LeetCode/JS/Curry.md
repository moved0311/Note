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


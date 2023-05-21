```ts
type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timer: ReturnType<typeof setTimeout> 

    return function(...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn(...args)
      }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

```

 [2627. Debounce](https://leetcode.com/problems/debounce/?utm_campaign=PostD15&utm_medium=Post&utm_source=Post&gio_link_id=AovN2Ojo)
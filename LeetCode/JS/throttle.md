```ts
type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
  let lock = false
  let lastArgs;

  const run = () => {
    if(!lock && lastArgs){
      fn(...lastArgs)
      lastArgs = null;
      lock = true;

      setTimeout(() => {
        lock = false;
        run();
      }, t)
    }
  }

  return function (...args) {
    lastArgs = args
    run()
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
```

 * [2676. Throttle](https://leetcode.com/problems/throttle/description/)
type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  return new Promise<void>((resolve) => {
    let poolLen = 0;
    let taskId = 0;
    let done = 0;

    const checkDone = () => {
      poolLen--;
      done++;

      if (done === functions.length) {
        resolve();
      } else {
        run();
      }
    };

    const run = () => {
      while (poolLen < n && taskId < functions.length) {
        poolLen++;
        const task = functions[taskId++];
        task().then(checkDone);
      }
    };

    run();
  });
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

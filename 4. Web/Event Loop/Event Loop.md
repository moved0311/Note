[浏览器知识点整理（十二）事件循环机制（Event Loop） - 掘金](https://juejin.cn/post/6977746526441308173)

* Mircotask (jobs)
	* process.nextTick, promise, MutationObserver
* Macrotask (task)
	* `<script>`, setTimeout, setInterval, setImmediate, I/O, UI rendering

 
 [Event loop視覺化](https://www.jsv9000.app/)
```js
function func1() {
  console.log("func1 start");
  return new Promise((resolve) => {
    resolve("OK");
  });
}

function func2() {
  console.log("func2 start");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK");
    }, 10);
  });
}

setTimeout(() => Promise.resolve().then(
  function func3() {
    console.log(2);

    Promise.resolve().then(
      function func4() {
        func1()
      }
    )
    console.log(3);
  }
), 20);


console.log(1);


console.log(4);

func1().then(() => {
  console.log(5);
});

func2().then(() => {
  console.log(6);
});

setTimeout(() => {
  console.log(7);
}, 0);

console.log(8);

```

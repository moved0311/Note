## Deboundce
每次呼叫function會將前一次的timeout清除,並延遲呼叫function的時間
```js
function debounce(func, delay) { 
	let timeout; 
	return function() { 
		const context = this; 
		const args = arguments; 
		clearTimeout(timeout); 
		timeout = setTimeout(() => func.apply(context, args), delay); 
	}; 
}
```

## Throttle
會有一個鎖,設定的時間到時才打開,才能真正呼叫到function
```js
function throttle(func, delay) {
  let wait = false;

  return (...args) => {
    if (wait) {
        return;
    }

    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  }
}
```

使用方式
```js
const func = () => {
	/* ... */
}
debounce(func, 250);
throttle(func, 250);
```

## Reference
*  [How to debounce and throttle in React without losing your mind](https://www.developerway.com/posts/debouncing-in-react?ck_subscriber_id=1841440222&utm_source=convertkit&utm_medium=email&utm_campaign=How+to+debounce+and+throttle+in+React+without+losing+your+mind%20-%209773764) 

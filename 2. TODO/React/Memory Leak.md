```js
useEffect(() => {  
    let abortController = new AbortController();  
    // your async action is here  
    return () => {  
    abortController.abort();  
    }  
    }, []);
```


## Reference
* [How to Fix Memory Leaks in React | C7 Blog](https://compile7.org/decompile/how-to-fix-memory-leaks-in-react/)

`let proxy = new Proxy(target, handler);`


範例: 使用proxy做驗證

```js
var target = { Tom: 1, Jack: 2 } 
var handler = { 
	get: function(target, prop){ 
		if(prop in target){ 
			return `Login in, ${prop}.`; 
		} else{ return `Guest, ${prop}.`; 
		} 
	} 
} 
var proxy = new Proxy(target, handler); 

proxy.Tom //"Login in, Tom." 
proxy.Jack //"Login in, Jack." 
proxy.Marry //"Guest, Marry."
```
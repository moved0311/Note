
也稱做Self-Executing Anonymous Function，是一個定義完就馬上執行的JavaScript function。 用括弧(Grouping Operator)包起來的匿名函數(Anonymous function)，避免汙染到全域變數。括弧裡面包含馬上執行的function。

- 語法:

```js
(function(){})();
```

- 範例:

```js
(function(){
    let name = "Tom";
    console.log(name);
})();
//Tom
console.log(name); //undefined
```

```
let IIFE = (function(){
    let name = "Tom";
    return name;
})();
IIFE  // Tom
```

```
let hello = function(name){
    return (`Hello ${name}!`);
};
hello("Tom"); //"Hello Tom!"
```

```
(function(name){
    console.log(`Hello ${name}!`);
})("Tom");
// Hello Tom!

```

- Reference
    - [MDN IIFE](https://developer.mozilla.org/zh-TW/docs/Glossary/IIFE)
    - [Day20 立即呼叫的函式表示式(IIFE)](https://ithelp.ithome.com.tw/articles/10193313)
複製一份browser DOM作為virtual DOM, state或是props改變時是操作virual DOM, 之後React再用diff演算法(diffing algorithm)優化過後才做browser DOM的操作。


Browser DOM(Document Object Model)
* 樹狀結構表示HTML元素、CSS樣式、JS
* 是瀏覽器渲染引擎的一部分
* 透過getElementById, appendChild, setAtrribute操作
* 操作browser DOM會觸發reflows和repaints

## Reference
* [Virtual DOM vs. Browser DOM: Exploring the Differences | HackerNoon](https://hackernoon.com/virtual-dom-vs-browser-dom-exploring-the-differences?source=rss)
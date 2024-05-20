
###  [RSC From Scratch. Part 1: Server Components · reactwg/server-components · Discussion #5](https://github.com/reactwg/server-components/discussions/5)

1. JSX

在PHP是直接將變數直接轉為字串顯示在元素內，React需要遞迴將物件轉為字串，只用字串處理是不足夠的，React開發出JSX，是一種JavaScript語法擴充。可以將HTML物件放在變數中，例如
```jsx
const element = (
	<div>
		<h1>Hello!</h1>
		<h2>Good to see you here.</h2>
	</div>
)
```
等同於
```jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);
```
在將JSX轉為字串時就可以判斷jsx的型別在用不同邏輯轉換為字串。

## Pro.
1. Zero effect on bundle size
2. Access the backend directly
3. Automatic client code splitting
4. Use as much as little as you like
5. Server mental model, modern UX
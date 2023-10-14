## useState
```jsx
const [count, setCount] = useState(0)

return (
  <button onClick={() => setCount(v => v + 1)}>Add</button>
);
```

## useEffect

```jsx
useEffect(() => {
  console.log('useEffect...')

  return () => {
    console.log('useEffect clean function...')
  }
}, [count])
```

每當count改變時會執行useEffect hooks, 每次執行新的useEffect時會觸發前一次useEffect的clean function

## useReducer
```js
const INITIAL_DATA = {count: 0}

const countReducer = (state, action) => {
	if(action.type === 'increment'){
		return {
			...state,
			count: state.count + 1
		}
	}else if (action.type === 'decrement'){
		return {
			...state,
			count: state.count - 1
		}
	}
}

const Main = () => {
	const [state, dispatch] = useReducer(countReducer, INITIAL_DATA)
	return (
		<div>Main:
			<button onClick={() => dispatch({type: 'decrement'})}>-</button>
			{state.count}
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
		</div>
	)
}
```
## Reference
* [React Hooks Tutorial - YouTube](https://www.youtube.com/playlist?list=PLxRVWC-K96b2KrTW6AqAE6vUXfOTnD-PS)
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

## useRef
> Store a mutable value. won't change when the component re-render.
> Manipulate HTML element, like input.


## useMemo

當一個變數X需要經過複雜計算得到，每次re-render時，都會重複計算X變數。
這時候可以使用useMemo將X保存在記憶體中避免每次重覆計算。

When a variable X requires complex computation and is recalculated on each re-render, you can use `useMemo` to store X in memory and avoid redundant computations.


## Reference
* [React Hooks Tutorial - YouTube](https://www.youtube.com/playlist?list=PLxRVWC-K96b2KrTW6AqAE6vUXfOTnD-PS)
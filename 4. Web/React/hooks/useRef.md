

type:
* HTMLDivElement,  HTMLInputElement

```ts
import { useRef } from 'react';

const ref = useRef<HTMLDivElement>(null)


<div ref={ref} />
```


## 點擊元素外關閉視窗
```ts
  const handleDOMClick = (e: MouseEvent) => {
    if (accountPanelRef?.current && !accountPanelRef?.current?.contains(e.target as Node) && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleDOMClick);

    return () => {
      window.removeEventListener('click', handleDOMClick);
    }
  }, [])
```

## 清除input文字
```tsx
  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

```
```html
  <input
	placeholder={placeholder}
	onChange={debounce(handleChangeInput, 500)}
	ref={inputRef}
  />
```


type:
* HTMLDivElement 

```ts
import { useRef } from 'react';

const ref = useRef<HTMLDivElement>(null)


<div ref={ref} />
```


## 點擊元素外關閉視窗
```ts
  const handleDocClick = (e: MouseEvent) => {
    if (accountPanelRef?.current && !accountPanelRef?.current?.contains(e.target as Node) && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleDocClick);

    return () => {
      window.removeEventListener('click', handleDocClick);
    }
  }, [])
```
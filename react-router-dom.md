```ts
import { Outlet }

<Outlet context={{ id: id}} />
```

```tsx
import { useOutletContext } from 'react-router-dom'
const Page: React.FC = () => {
	const { tab } = useOutletContext()
}
```

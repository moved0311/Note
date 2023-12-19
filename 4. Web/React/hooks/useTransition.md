* React Hook that lets you update the state without blocking the UI.
```tsx
const [isPending, startTransition] = useTransition()
```

可以將setState放在startTransition內,來避免卡住UI操作
```tsx
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```
## onChnage

```tsx
const onChnageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	// ...
}
```


## onKeyDown
```tsx
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };
```

```ts
  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
  };

  // 監聽點擊搜尋元件以外的地方需要關閉搜尋結果彈出視窗
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
```

## onClick
```tsx
(e: React.MouseEvent<HTMLElement>)
```
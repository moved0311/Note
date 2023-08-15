
```tsx
  const [isChinese, setIsChinese] = useState(false);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      // 搜尋中文時避免按Enter後馬上送出(中文會有Enter選字問題)
      if (isChinese) {
        setIsChinese(false);
      } else {
        handleSearch();
      }
    }
  };
```
```html
  <input
	onKeyDown={handleKeyDown}
	onCompositionStart={() => setIsChinese(true)}
  />
```

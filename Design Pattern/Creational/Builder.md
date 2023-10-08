```ts
class HotDog {
  constructor(
    public bun: string, /* 麵包 */
    public ketchup: boolean, /* 番茄醬 */
    public mustard: boolean, /* 芥末 */
    public kraut: boolean, /* 泡菜 */
  ) {}
}

new HotDog('wheat', false, true, true)
```

有一個熱狗物件中有不同的步驟，但這樣產生物件會不好讀
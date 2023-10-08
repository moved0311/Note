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

有一個熱狗物件中有不同的製作步驟，但這樣產生物件會不好讀。

Builder Pattern是透過暴露方法來實現一步一步實現的過程，而不是透過constructor一次建立

```ts
class HotDog {
  constructor() {}

  addKetchup() {
   this.ketchup = true;
   return this;
  }

  addMustard() {
   this.mustard = true;
   return this;
  }
  
  addKraut() {
   this.kraut = true;
   return this;
  }
}

const lunch = new HotDog('bun')

lunch
  .addKetchup()
  .addMustard()
  .addKraut()
```


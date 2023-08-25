
```ts
catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      console.log(err.message);

      return;
    }
```

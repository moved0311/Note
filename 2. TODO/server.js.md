
```js
import { fileURLToPath } from "node:url";

const appDir = new URL("./app/", import.meta.url);

// import.meta.url: 目前檔案的路徑
// appDir: URL物件

function resolveApp(path = "") {
  return fileURLToPath(new URL(path, appDir));
}

// resolveApp("abc") → **/app/abc
```
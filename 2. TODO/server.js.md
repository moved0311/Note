
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



## 顯示Hello World
```js
import { renderToString } from "react-dom/server";

app.get("/", async (c) => {
  const Page = await import("./build/page.js");
  const html = renderToString(createElement(Page.default));
  return c.html(html);
});
```
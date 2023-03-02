要怎麼把公司UI共用元件庫打包發佈讓所有專案能夠使用又不希望上傳到公開的元件庫？
一般下載套件如使用yarn作為套件管理工具都是到公開元件`https://registry.yarnpkg.com`做下載，但公司的東西不希望放到公開的地方，希望能夠放到自己的機器上。目前公司是自己架Gitlab，所有程式碼都推到公司機器上。

公用套件庫要怎麼也一起推到Gitlab，並可以從Gitlab做下載呢？
Gitlab有提供Packages & Registries(圖1)。配合CICD每次打tag時能夠一起發佈到這個地方(圖2)

|圖1|圖2|
|---|---|
|![Packages & Registries](./registry.png)| ![Packages & Registries](./registry1.png)|

## 流程
1. 開發元件並透過[Storybook](https://storybook.js.org/)UI開發工具預覽
2. 透過[Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/) 等工具編譯打包
3. 建立CICD, 每次打tag時自動發佈到Gitlab Registry
4. 安裝至使用的專案

## 1. 開發元件
透過[Storybook](https://storybook.js.org/)可以方便預覽每個元件的樣式與有什麼參數可以使用。例如按鈕元件，可以透過下方看出有什麼參數可以使用，與觸發時的樣式預覽。

![Storybook](./storybook.png)

## 2.  透過Rollup編譯打包
[Rollup](https://rollupjs.org/) 輕量的打包工具，只要有一個設定檔`rollup.config.js`, 執行`rollup -c`編譯就可以產出對應的輸出打包檔案。

* `rollup.config.js` 
```js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDeps from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "esm",
      },
    ],
    plugins: [
      commonjs(),
      resolve({ extensions }),
      peerDeps({
        includeDependencies: true,
      }),
      terser(),
      postcss(),
      typescript(),
      image(),
      babel({ babelHelpers: "bundled", extensions }),
    ],
  },
];

```

`package.json`
```json
{
  "main": "build/index.js",
  "module": "build/index.es.js",
  "scripts": {
    "build": "rollup -c",
  },
  ...
}
```
input程式進入點, output打包後檔案的檔名、路徑與輸出格式。
plugins可以加入一些額外功能

## 3. 發佈到Gitlab Registry

到 Settings > Access Token註冊Project Access Tokens (權限如果怕哪裡被擋住先勾一勾？)

![Access Token](./accessToken.png)

設定CICD (Gitlab只要偵測到專案內有.gitlab-ci.yml就會執行對應的CICD)
`.gitlab-ci.yml`
```yml
image: node:12.20.0

stages:
  - deploy

deploy:
  stage: deploy
  script:
    - yarn publish

```
建立一個node環境並執行`yarn publish`。只要push時就會執行，可以在這裡設定成打tag才執行推版動作。

當`git push`時觸發CICD，在Gitlab CI/CD的頁面就會像這樣

![CICD](./CICD.png)

`yarn publish`會根據`.yarnrc.yml`設定檔來決定佈署的地方與是否需要權限

`.yarnrc.yml`
```yml
npmScopes:
  cnyes:
    npmPublishRegistry: "${CI_API_V4_URL}/projects/${CI_PROJECT_ID}/packages/npm/"
    npmAlwaysAuth: true
    npmAuthToken: "${NPM_AUTH_TOKEN}"

```
CI開頭的變數名稱都是Gitlab內建的不用另外設定
這裡的`NPM_AUTH_TOKEN`就會拿到上面的Access Token

執行`yarn publish`時，會依照`package.json`設定做打包。
```json
{
  "name": "@cnyes/fe-share-components",
  "files": [
    "build",
    ".npmrc"
  ],
  "publishConfig": {
	"@cnyes:registry": "https://<gitlab-url>/api/v4/projects/<project-id>/packages/npm/"
  },
}
```
files定義需要打包哪些檔案
`<gitlab-url>`與`<project-id>`輸入自己的gitlab網址與專案ID

如果有設定權限還需要設定`.npmrc`



## Reference
* [Publish packages with Yarn | GitLab](https://docs.gitlab.com/ee/user/packages/yarn_repository/)
* [(10) GitLab NPM Registry Demo - YouTube](https://www.youtube.com/watch?v=yvLxtkvsFDA)

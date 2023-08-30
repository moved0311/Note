## Portal

- [GA事件對照表](https://docs.google.com/spreadsheets/d/15PgEry0JvGlJI9aa_vQK7N9vcJYG5aMfgzLXF5pyUeQ/edit#gid=1860299583)
- [外包網站網頁連結](https://www.ohi-studio.com/work/anue_benefits/index.html)

## Description

> 把外包做的頁面接回來,接API放到自家Server上,新增GA

## 心得

外包寫的寫法很詭異,相同的地方一直重複複製貼上,沒有抽出來做成共用元件，很多累贅的地方沒有修正。 但這是一次性的campaign頁面，不需要長期維護。串一串API,GA能動就上線了。

## Flow

- `yarn build`
    - 會打包在assets中,再把assets裡的所有檔案壓縮,放到campaign機器上

## Project setup

- [import hooks directly from unpkg #1961](https://github.com/preactjs/preact/issues/1961)
    
```ts
const headerConfig = {
  headers: () => [
	{
	  source: '/(.*)',
	  headers: [
		{
		  key: 'Content-Security-Policy',
		  value:
			"frame-ancestors 'self' '<https://campaign.cnyes.com/topics/ESG>' 'localhost:*' '<https://docker.cnyes.cool/*>' '<https://b2b.cnyes.com/*>'",
		},
	  ],
	},
  ],
};
```
    
```ts
server.use(
  helmet({
	contentSecurityPolicy: {
	  directives: {
		frameAncestors: ['<http://b2b.cnyes.com>', '<https://b2b.cnyes.com>'],
	  },
	},
	frameguard: false,
  })
);
```
    

## API

- Environmental 排行 (ranking-3) [https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/ENV?quote=1](https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/ENV?quote=1)
- Social 排行 (ranking-4) [https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/SOC?quote=1](https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/SOC?quote=1)
- Governance 排行 (最佳公司治理評鑑/ranking-5) [https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/GOV?quote=1](https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/GOV?quote=1)
- ESG 綜合排行 (ESG評鑑排行榜/ranking-2) [https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/ESG?quote=1](https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/ESG?quote=1)
- ESG 綜合成長排行 (企業永續前景看好/持續關注ESG最佳進步/ranking-6) [https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/COM?quote=1](https://ws.api.beta.cnyes.cool/ws/api/v1/esg/rank/COM?quote=1)

`npm install babel-preset-env --save`

- `.babelrc`

```json
{
  "presets": [
	  "@babel/preset-env",
	  "@babel/preset-react"
  ]
}
```
    
- package.json

```json
{
  "name": "anue_benefits",
  "version": "1.0.0",
  "description": "",
  "main": "app/main.jsx",
  "scripts": {
	"p": "webpack",
	"dev": "webpack-dev-server --devtool eval --progress --colors --content-base assets --watch"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
	"@babel/preset-env": "^7.16.8",
	"babel-eslint": "^8.0.3",
	"bower": "^1.7.9",
	"css-loader": "^0.28.7",
	"exports-loader": "^0.7.0",
	"extract-text-webpack-plugin": "^4.0.0-beta.0",
	"fetch": "^1.1.0",
	"html-webpack-plugin": "^2.22.0",
	"immutable": "^3.8.1",
	"imports-loader": "^0.7.1",
	"jquery": "^3.5.1",
	"masonry-layout": "^4.2.0",
	"mdn-polyfills": "^5.16.0",
	"pug": "^3.0.2",
	"pug-plain-loader": "^1.1.0",
	"query-string": "^6.12.0",
	"react-document-meta": "^2.1.1",
	"sass-loader": "^6.0.6",
	"style-loader": "^0.19.0",
	"vue": "^2.6.11",
	"vue-loader": "^14.2.2",
	"vue-router": "^3.1.6",
	"vue-template-compiler": "^2.6.11",
	"webpack": "^4.27.1",
	"webpack-cli": "^3.3.11",
	"webpack-dev-server": "^3.11.0",
	"whatwg-fetch": "^2.0.3"
  },
  "dependencies": {
	"@babel/core": "^7.16.7",
	"@babel/preset-react": "^7.16.7",
	"babel-loader": "^8.2.3",
	"babel-polyfill": "^6.26.0",
	"gsap": "^1.20.6",
	"in-viewport": "^3.4.2",
	"owl.carousel": "^2.3.3",
	"react": "^16.2.0",
	"react-dom": "^16.13.1",
	"tiny-slider": "^2.9.2"
  }
}
```
    
- webpack.config.js
    
```json
var webpack = require("webpack");
var bower_dir = __dirname + "/bower_components";
var npm_dir = __dirname + "/node_modules";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
	main: "./app/main.js",
  },
  resolve: {
	extensions: [".js", ".jsx", ".vue"],
	alias: {
	  vue: "vue/dist/vue.esm.js",
	},
  },
  output: {
	path: __dirname + "/assets",
	filename: "js/[name].js",
  },
  module: {
	// noParse: [],
	rules: [
	  {
		test: /\\\\.vue$/,
		loader: "vue-loader",
	  },
	  {
		test: /\\\\.(js|jsx)$/,
		exclude: /(node_modules|bower_components)/,
		use: {
		  loader: "babel-loader",
		  options: {
			presets: ["@babel/preset-env"],
		  },
		},
	  },
	  {
		test: /\\\\.css$/,
		use: ExtractTextPlugin.extract({
		  use: ["style-loader", "css-loader"],
		}),
	  },
	  {
		test: /\\\\.(sass|scss)$/,
		use: ExtractTextPlugin.extract({
		  use: ["style-loader", "css-loader!sass-loader?includePaths[]=" + __dirname, "./node_modules/compass-mixins/lib"],
		}),
	  },
	  {
		test: /\\\\.jade$/,
		loader: "jade",
	  },
	  {
		test: /\\\\.pug$/,
		loader: "pug",
	  },
	],
  },
  plugins: [
	new ExtractTextPlugin("css/[name].css"),
	new webpack.ProvidePlugin({
	  React: "react",
	  ReactDOM: "react-dom",
	  fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch",
	  $: "jquery",
	  jQuery: "jquery",
	  "window.jQuery": "jquery",
	}),
  ],
};

module.exports = config;

```
    

## Google插入廣告

- [Get Started with Google Publisher Tags](https://developers.google.com/publisher-tag/guides/get-started)

## facebook分享至貼文,圖片cache問題

[https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) :arrow_right: 把圖片名稱換掉

## Add GA

- eventCategory: 它是一整組的事件，包括相關類別內的多個活動，例如下載、CTA、視頻、表單等。
- eventAction: 它追踪類別中單個事件的不同動作，例如PDF檔案下載、視頻播放、表單提交以及點擊CTA按鈕。
- eventLabel: 可以用來添加其他信息的標記，例如，如果您有很多PDF檔案可供下載，則可以分別標記它們以區分它們。
- eventValue: 它允許您為操作設置一個數值以識別特定操作的重要性。您對某個PDF下載事件追踪的HTML代碼類似以下的代碼：

`<button onclick=”ga(‘send’, ‘event’, [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);”>Example Button Text</button>`

## ADD GA

```
<head>
  ...
</head>

<!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="<https://www.googletagmanager.com/gtag/js?id=UA-145056278-16>"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-145056278-16');
  </script>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  '<https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)>;
  })(window,document,'script','dataLayer','GTM-N6NFZP5');</script>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="<https://www.googletagmanager.com/ns.html?id=GTM-N6NFZP5>"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  ...
</body>

```

```
:onclick="`gtag('event', 'Click_Quote', {'event_category' : 'ESG行情','event_label' : '${f.code}_${f.title}'});`"

```

## Vue Pass Props when new Vue

[https://forum.vuejs.org/t/passing-props-to-root-instances-in-2-0/244/15](https://forum.vuejs.org/t/passing-props-to-root-instances-in-2-0/244/15)

## Vuejs pagination

- [https://www.npmjs.com/package/vuejs-modern-pagination](https://www.npmjs.com/package/vuejs-modern-pagination)
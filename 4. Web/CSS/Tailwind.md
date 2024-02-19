

## Install tailwind css
* https://nx.dev/recipes/react/using-tailwind-css-in-react

```sh
npm add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```shell
npx tailwindcss init -p
```


`postcss.config.js`
```js
const { join } = require('path');

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js')
    },
    autoprefixer: {}
  }
};
```

`tailwind.config.js`
```js
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}')],
  theme: {
    extend: {}
  },
  plugins: []
};
```

`.storybook/preview.ts`
```js
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}')],
  theme: {
    extend: {}
  },
  plugins: []
};
```

`src/styles/tailwind.css`
```css

```
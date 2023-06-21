main.ts`
```
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/fe-common-ui/vite.config.ts',
      },
    },
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
  staticDirs: ['../public'],
};

export default config;

```

* `tsconfig.json`
```
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "outDir": ""
  },
  "files": [
    "../../../node_modules/@nx/react/typings/styled-jsx.d.ts",
    "../../../node_modules/@nx/react/typings/cssmodule.d.ts",
    "../../../node_modules/@nx/react/typings/image.d.ts"
  ],
  "exclude": [
    "../**/*.spec.ts",
    "../**/*.spec.js",
    "../**/*.spec.tsx",
    "../**/*.spec.jsx"
  ],
  "include": [
    "../src/**/*.stories.ts",
    "../src/**/*.stories.js",
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.mdx",
    "*.ts",
    "*.js"
 ]
}

```
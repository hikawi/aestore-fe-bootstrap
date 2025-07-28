# AEStore FE Bootstrap

## Overview

This is a project bootstrapped with:

```
pnpx create-next-app@latest
pnpm create storybook@latest
```

## Gotchas

### PostCSS Config

Since using Tailwind with NextJS automatically generates a `postcss.config.mjs` file, which is in a format that Vite does not understand. We would need to change it to this config:

**Correct Config**:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

**Wrong Config**:

```js
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

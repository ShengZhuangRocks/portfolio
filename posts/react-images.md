---
title: "How to load picture in react"
author: "Sheng Zhuang"
date: "12/03/2021"
stack: "React Nextjs Webpack"
image: "p11.jpg"
---

the error:

> Next.js Import image error Module parse failed: Unexpected character '�' (1:0)

the solution:

1. add file-loader and url-loader to package devDependencies

```bash
yarn add file-loader url-loader -D
```

2. webpack setting in nextjs

```js
module.exports = {
  ...
  webpack: function (config) {
    // ... other rules pushed
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: "url-loader",
    });
    return config;
  },
};
```

3. load pic in components

```js
import drawing from "../public/static/graffetti.jpg";

const Pic = styled.div`
  width: 100vw;
  height: 60px;
  background-image: url(${drawing});
`;
```

# Vue
  This project is for practice vue.js

# Use tools
 - Vue.js
 - webpack
 - Babel

# .vue in sublime text 3

 - via Package Control:
  1. Ctrl+Shift+P
  2. install Package
  3. Vue Syntax Highlight

 - Manual:
  1. clone https://github.com/vuejs/vue-syntax-highlight
  2. Preferences
  3. Browse Packages...
  4. 把步驟1下載的文件放裡面
  5. 如果沒有找到, 重開Sublime

# Start
```
npm run start
open index.html
```
- 就會看到紅色的Hello World

# ERROR

## install vue-loader
```
ERROR in ./app/xxxx/xxx.vue
Module build failed: TypeError: this._init is not a function
    at Object.Vue$
```

#### resolve
```
$ npm install -D vue-loader

webpack.config.js
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
```

## vue-loader 10
```
ERROR in ./app/xxxx/xxx.vue
Module build failed: Error: Cannot find module 'vue-template-compiler'
```

#### resolve
  vue-loader 10 後就不再內置 vue-template-compiler
```
  $npm i vue-template-compiler -D
```

## babel env
```
Error: Couldn't find preset "env" relative to directory
```

#### resolve
```
  $npm i babel-preset-env -D
```
以上問題，皆已解決, 只用以紀錄。

# Reference
 From: https://blog.guowenfh.com/2016/03/24/vue-webpack-01-base/


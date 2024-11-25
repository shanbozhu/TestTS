# TestTS

### 1. 安装node

`brew install node`

`node -v`

安装`node.js`时会自动安装`npm`

### 2. 全局安装typescript

`npm i -g typescript`

`tsc -v`

typescript：提供`tsc`命令，将ts编译为js。

// 将ts编译为js

`tsc test.ts`

// 将ts编译为js。使用es6标准编译

`tsc --target es6 test.ts`

// node执行js

`node test.js`

### 3. 全局安装ts-node

`npm i -g ts-node`

`ts-node -v`

ts-node：提供`ts-node`命令，直接执行ts。

// ts-node执行ts

`ts-node test.ts`

解释：`ts-node`命令在内部偷偷的将ts编译为js，然后再执行js。

原因：Node.js/浏览器，只识别js，不识别ts。需要先将ts编译为js，然后执行js。

参考文档：https://www.jianshu.com/p/5f5cdcbc8b00

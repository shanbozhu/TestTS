# TestTS

### 1. 安装node

`brew install node`

`node -v`

`npm -v`

- 安装`node.js`时会自动安装`npm`

### 2. 创建项目目录

1. 创建一个新目录并进入：

`mkdir my-typescript-project`

`cd my-typescript-project`

### 3. 初始化 npm 项目

1. 初始化项目，生成`package.json`文件

`npm init -y`

### 4. 安装 TypeScript

1. 安装`TypeScript`作为开发依赖：

`npm install typescript --save-dev`

2. 验证 TypeScript 安装：

`npx tsc --version`

### 5. 创建 TypeScript 配置文件

1. 生成`tsconfig.json`文件：

`npx tsc --init`

2. 修改`tsconfig.json`文件，设置基本的编译选项：

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
`rootDir`：TypeScript 源文件目录。

`outDir`：编译后的 JavaScript 文件输出目录。

`strict`：启用严格类型检查。

### 6. 创建源代码目录和文件

1. 创建`src`目录：

`mkdir src`

2. 在`src`目录下创建`index.ts`文件：

```
// src/index.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("World"));
```

### 7. 编译 TypeScript 代码

1. 编译`src/index.ts`到`dist/index.js`：

`npx tsc`

这会根据`tsconfig.json`的配置，将`TypeScript`代码编译为`JavaScript`，输出到 dist 目录。

### 8. 运行编译后的代码

1. 运行编译后的`JavaScript`文件：

`node dist/index.js`

- 输出：`Hello, World!`

### 9. 添加开发工具（可选）

1. 安装`ts-node`（直接运行`TypeScript`代码，无需手动编译）：

`npm install ts-node --save-dev`

2. 运行`TypeScript`文件：

`npx ts-node src/index.ts`

3. 添加`nodemon`（自动重启开发服务器）：

`npm install nodemon --save-dev`

4. 在`package.json`中添加脚本：

```
{
  "scripts": {
    "start": "nodemon src/index.ts",
    "build": "tsc",
    "serve": "node dist/index.js"
  }
}
```

- 运行开发模式：`npm start`
- 构建项目：`npm run build`
- 运行编译后的代码：`npm run serve`

### 10. 添加第三方库（可选）

1. 例如，安装`lodash`及其`类型声明`：

`npm install lodash @types/lodash --save-dev`

2. 在`src/index.ts`中使用：

```
import _ from 'lodash';
console.log(_.capitalize("typescript"));
```

### 11. 项目结构

```
my-typescript-project/
├── node_modules/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── package.json
├── package-lock.json
├── tsconfig.json
```

### 11. 运行项目

- 开发模式（自动编译和运行）：`npm start`
- 生产模式（手动编译和运行）：`npm run build` && `npm run serve`

---

### 1. 系统全局安装typescript

`npm i -g typescript`

`tsc -v`

typescript：提供`tsc`命令，将ts编译为js。

### 2. 执行js

node执行js：`node test.js`

---

### 1. 系统全局安装ts-node

`npm i -g ts-node`

`ts-node -v`

ts-node：提供`ts-node`命令，直接执行ts。

### 2. 执行ts

ts-node执行ts：`ts-node test.ts`

解释：`ts-node`命令在内部先将ts编译为js，然后再执行js。

原因：Node.js/浏览器，只识别js，不识别ts。需要先将ts编译为js，然后再执行js。

参考文档：https://www.jianshu.com/p/5f5cdcbc8b00

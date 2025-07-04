# TestTS

### 1. 安装 node

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

内容如下：
```
{
  "name": "testts",
  "version": "1.0.0",
  "description": "### 1. 安装 node",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 4. 安装 typescript

1. 安装`typescript`作为开发依赖：

`npm install typescript --save-dev`

其中：

- `npm install <package-name>`：
	- 将包安装为生产依赖（`dependencies`），记录在`package.json`的`dependencies`字段中。
	- 这些依赖是项目在生产环境（如部署到服务器或最终运行时）所需的包。例如，运行时需要的库（如`express`、`lodash`）通常作为生产依赖安装。
-  `npm install --save-dev <package-name>`：
	- 将包安装为开发依赖（`devDependencies`），记录在`package.json`的`devDependencies`字段中。
	- 这些依赖仅在开发和测试阶段需要，例如编译工具（`typescript`）、测试框架（`jest`）、或代码格式化工具（`prettier`）。在生产环境中，这些依赖不会被包含。
- 安装依赖：
	- 克隆项目后，运行`npm install`会安装`package.json`中列出的所有`dependencies`和`devDependencies`。
	- 在生产环境中，运行`npm install --production`只安装`dependencies`。

2. 验证`typescript`安装：

`npx tsc --version`

`npx`是`Node Package eXecute`的缩写，允许直接运行项目`node_modules`中安装的可执行文件，无需全局安装。

### 5. 创建 TypeScript 配置文件

1. 生成`tsconfig.json`文件：

`npx tsc --init`

2. 修改`tsconfig.json`文件，设置基本的编译选项：

```
{
  "compilerOptions": {
    "target": "es2016",         // 目标 JavaScript 版本
    "module": "commonjs",       // 模块系统（Node.js 用 commonjs）
    "rootDir": "./src",         // 源码目录
    "outDir": "./dist",         // 编译输出目录
    "strict": true,             // 启用严格模式
    "esModuleInterop": true,    // 兼容 CommonJS 和 ES Modules
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],      // 包含编译的文件
  "exclude": ["node_modules"]   // 排除的文件
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
```
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("TypeScript"));
```

### 7. 编译 TypeScript 代码

1. 编译`src/index.ts`到`dist/index.js`：

`npx tsc`

这会根据`tsconfig.json`的配置，将`TypeScript`代码编译为`JavaScript`，输出到`dist`目录。

### 8. 运行编译后的代码

1. 运行编译后的`JavaScript`文件：

`node dist/index.js`

- 输出：`Hello, World!`

### 9. 添加开发工具（可选）

1. 安装`ts-node`（直接运行`TypeScript`代码，无需手动编译）：

`npm install ts-node @types/node --save-dev`

2. 运行`TypeScript`文件：

`npx ts-node src/index.ts`

3. 使用`Node.js`脚本，修改`package.json`，添加脚本：

```
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
}
```
运行命令：
```
npm run build    # 编译
npm run start    # 运行编译后的代码
npm run dev      # 直接运行 TS 代码（开发模式）
```

4. 添加`nodemon`（自动重启开发服务器）：

`npm install nodemon --save-dev`

5. 使用`Node.js`脚本，修改`package.json`，添加脚本：

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

### 12. 运行项目

- 开发模式（自动编译和运行）：`npm start`
- 生产模式（手动编译和运行）：`npm run build` && `npm run serve`

---

### 1. 系统全局安装 typescript

`npm install -g typescript`

`tsc -v`

typescript：提供`tsc`命令，将ts编译为js。

### 2. 执行 js

node执行js：`node test.js`

---

### 1. 系统全局安装 ts-node

`npm install -g ts-node`

`ts-node -v`

ts-node：提供`ts-node`命令，直接执行ts。

### 2. 执行 ts

ts-node执行ts：`ts-node test.ts`

解释：`ts-node`命令在内部先将ts编译为js，然后再执行js。

原因：Node.js/浏览器，只识别js，不识别ts。需要先将ts编译为js，然后再执行js。

参考文档：https://www.jianshu.com/p/5f5cdcbc8b00

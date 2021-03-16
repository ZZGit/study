# zreact

## 创建项目
```shell
mkdir zreact && cd $_
yarn add webpack webpack-cli webpack-dev-server -D
yarn add html-webpack-plugin -D
```

创建index.js文件
```shell
mkdir src
echo 'console.log("Hello World!")' > src/index.js
```

创建index.html文件
```shell
touch src/index.html
```
文件内容
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Study React</title>
</head>
<body>

</body>
</html>
```

创建webpack配置文件
```shell
touch webpack.config.js
```
文件内容
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};
```
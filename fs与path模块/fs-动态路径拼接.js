const fs = require("fs");

console.log(__dirname);

// __dirname 表示当前js文件所处的目录
// 本地路径 / 和 \ 等价; 网络路径 必须使用 /
// 在vscode中由于/是转义字符,需要使用 // 才能正确表示 '/'
fs.readFile(__dirname + '/test.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log("读取文件失败!" + err.message);
    }
    console.log("读取文件成功!\n" + dataStr);
})
// 原代码路径参数: './test.txt'
// 终端测试代码:
// cd ../
// node .\Nodejs\fs-动态路径拼接.js
/*
在使用 fs 模块操作文件时,如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时,容易出现路径动态拼接错误的问题
原因：代码在运行的时候,会以执行 node 命令时所处的目录,动态拼接出被操作文件的完整路径
解决方案：在使用 fs 模块操作文件时,直接提供完整的路径,从而防止路径动态拼接的问题
*/
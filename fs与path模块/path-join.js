// path 是用来处理路径的模块.
// 常见方法: 
// path.join()用来将多个路径拼接成一个完整路径字符串
// path.basename()用来从路径字符串中,将文件名解析出来

const path = require('path');
const fs = require('fs');
// 1. path.join(str1,str2...)方法
//    注意: ../ 会抵消前面的路径 ./会被忽略
const pathStr = path.join('/a', '/b/c', '../', './d', 'e');
// console.log((pathStr)); // 输出: \a\d\e

// 今后凡是设计到路径拼接的操作,都要使用path.join()进行处理,不建议使用加号拼接.
fs.readFile(path.join(__dirname, './test.txt'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败:' + err.message);
    }
    console.log('文件读取成功！\n' + dataStr);
})

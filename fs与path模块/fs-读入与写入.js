// 1. 导入fs模块
const fs = require('fs')
// 2. 调用fs.readFile()方法读取文件
//    参数1: 读取文件的路径
//    参数2: 读取文件采用的编码格式,一般为 utf8
//    参数3: 回调函数,处理读取失败或成功的结果
fs.readFile('./test.txt', 'utf8', function (err, dataStr) {
    // 如果读取成功,则err为null.
    // 如果读取失败,则err为错误对象,dataStr为 undefined
    if (err) { // 判断文件是否读取成功
        return console.log('文件读取失败' + err.message);
    }
    console.log('文件读取成功,内容是:\n' + dataStr);
});
// 2. 调用fs.writeFile()方法写入文件
//    参数: 路径,写入内容,回调函数
fs.writeFile('./writeFileTest.txt', 'FullStack-Anna!', function (err) {
    // 如果写入成功,则err为null.
    // 如果写入失败,则err为错误对象
    if (err) { // 判断文件是否写入成功
        return console.log('文件写入失败！' + err.message);
    }
    console.log('文件写入成功！');
})
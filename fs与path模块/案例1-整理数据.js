const fs = require('fs');

// 默认异步调用,所以writeFile应该在readFile的回调函数之中
// 而不是在 readFile 之后
fs.readFile('./案例1-成绩.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }
    // console.log('文件读取成功!\n' + dataStr);
    const arrStr = dataStr.split(' ');
    const finStr = [];
    for (let i = 0; i < arrStr.length; i++) {
        const tmpStr = arrStr[i].replace('=', ':');
        finStr.push(tmpStr);
    }
    const outStr = finStr.join('\r\n');
    // console.log(outStr);
    fs.writeFile('./案例1-成绩ok.txt', outStr, function (err) {
        if (err) {
            return console.log('文件写入失败!' + err.message);
        }
        console.log('文件写入成功!');
    });
});
const path = require('path')
const fs = require('fs')

// 1. path.basename(path[,ext])方法: 获取路径中的文件名
const basePathStr = '../CSS/体验CSS.html'
console.log(path.basename(basePathStr));            // 体验CSS.html
console.log(path.basename(basePathStr, '.html'));   // 体验CSS

// 2. path.extname(path)方法: 获取路径中文件名的拓展名
console.log(path.extname(basePathStr));             // .html
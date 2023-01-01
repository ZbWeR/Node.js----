const fs = require('fs');
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// fs.writeFile注意点:
//    1. 该方法只能用来创建文件,不能用来创建路径
//    2. 重复调用该方法写入同一个文件,会覆盖原有内容

fs.readFile(path.join(__dirname, './案例2-index.html'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log("文件读取失败" + err.message);
    }
    resolveCSS(dataStr);
    resolveJs(dataStr);
    resolveHtml(dataStr);
})

function resolveCSS(htmlStr) {
    const styleStr = regStyle.exec(htmlStr);
    const cssCode = styleStr[0].replace('<style>', '').replace('</style>', '');
    fs.writeFile('案例2-style.css', cssCode, function (err) {
        if (err) {
            return console.log('css文件写入失败!' + err.message);
        }
        console.log('css文件写入成功!');
    })
}

function resolveJs(htmlStr) {
    const scriptStr = regScript.exec(htmlStr);
    const jsCode = scriptStr[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile('案例2-script.js', jsCode, function (err) {
        if (err) {
            return console.log('js文件写入失败!' + err.message);
        }
        console.log('js文件写入成功!');
    })
}

function resolveHtml(htmlStr) {
    const htmlCode = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="案例2-style.css"/>')
        .replace(regScript, '<script src="案例2-script.js"></script>')
    fs.writeFile('案例2-new.html', htmlCode, function (err) {
        if (err) {
            return console.log('html文件写入失败!' + err.message);
        }
        console.log('html文件写入成功!');
    })
}


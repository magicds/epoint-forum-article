const zip = require('./zip.js');
const post = require('./post.js');
const path = require('path');

// 接收服务的服务器地址
// const DEPLOY_URL = 'http://localhost:2001/';
// 服务器解压的绝对路径
// const DEPLOY_PATH = 'D:/Code/so/file-receiver/testOutput';

// 接收服务的服务器地址
const DEPLOY_URL = 'http://192.168.201.159/nodeFileReceiver';
// 服务器解压的绝对路径
const DEPLOY_PATH = 'E:/ServerRoot/fedemo/pages/forumarticle';

zip(path.resolve(__dirname, '../docs/.vuepress/dist'))
    .then(outFile => {
        console.log('文件压缩成功');

        console.log('开始上传');
        return post(DEPLOY_URL, DEPLOY_PATH, outFile);
    })
    .then(res => {
        console.log('上传成功');
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });

const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const path = require('path');

/**
 * 发起请求
 *
 * @param {string} url 请求地址
 * @param {string} serverPath 服务器放置路径
 * @param {string} file 压缩打包好的文件
 */
module.exports = function(url, serverPath, file) {
    const form = new FormData();
    form.append('serverPath', serverPath);
    form.append('file', fs.createReadStream(path.resolve(file)));
    return axios
        .post(url, form, {
            headers: {
                ...form.getHeaders()
            },
            maxContentLength: Infinity
        })
        .then(
            res => {
                return res.data;
            },
            err => {
                console.error(err);
            }
        );
};

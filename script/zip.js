const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

module.exports = function(sourcePath) {
    const outputFile = path.join(__dirname, 'tmp.zip');

    return new Promise((resolve, reject) => {
        if (fs.existsSync(outputFile)) {
            fs.unlinkSync(outputFile);
        }

        const output = fs.createWriteStream(outputFile);
        output.on('close', function() {
            console.log('output close');
            
            resolve(outputFile);
        });

        output.on('end', function() {
            console.log('output end');

            // post('/', 'D:/Code/so/file-receiver/testOutput', outputFile);
        });

        const zip = archiver('zip', {
            zlib: { level: 9 } // Sets the compression level.
        });

        zip.on('warning', function(ev) {
            console.log(ev);
        });

        zip.on('end', function() {
            console.log('zip end');
        });

        zip.pipe(output);

        // zip.directory(path.resolve('D:\\Code\\so\\article\\docs\\.vuepress\\dist'), false);
        zip.directory(path.resolve(sourcePath), false);
        zip.finalize()
            .then(() => {
                console.log('finalize');
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
};

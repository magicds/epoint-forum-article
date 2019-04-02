#!/bin/sh

# 确保脚本抛出遇到的错误
set -e

# 构建
yarn build
echo "build done";

# 拷贝
cp -r -f .vuepress/dist/* D:/xampp/htdocs/fedemo/pages/forumarticle/
echo "copy done";

# cd D:/xampp/htdocs/fedemo/pages/

# svn add forumarticle

# svn commit -m "【来自自动脚本】提交论坛文章更新"

# echo "commit success"
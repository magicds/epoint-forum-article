#!/bin/sh

# 确保脚本抛出遇到的错误
set -e

currPath=`pwd`

echo $currPath

# 构建
yarn build
echo "build done";

# 清空
# rm -f -r D:/xampp/htdocs/fedemo/pages/forumarticle/*
# cd D:/xampp/htdocs/fedemo/pages/forumarticle/
# svn delete .


# 拷贝
# cd $currPath
cp -r -f docs/.vuepress/dist/* D:/xampp/htdocs/fedemo/pages/forumarticle/
echo "copy done";

cd D:/xampp/htdocs/fedemo/pages/forumarticle/
svn add . --no-ignore --force

svn commit -m "【来自自动脚本】提交论坛文章更新"

echo "commit success"
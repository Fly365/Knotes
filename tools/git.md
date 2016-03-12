# github基本操作

[Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)

`git init` 添加到版本管理

新建**.gitignore**文件，写入不需要push的文件 eg:*node_modules bower_components .idea ....*

`git status`查看

`git add -A` 

`git rm -r --cached .` 撤销刚刚的git add操作

`git commit -m "first version"` *提交到本地库 -m 添加注释*

`git tag 0.1.0` *将tag提交到本地库*

`git remote add origin https://github.com/kenfo/svg.git` *在github上创建svg项目*

`git push origin master` 将版本推送到github上

`git push origin 0.1.0` 将tag推送

*********************
如果是直接通过`git clone https://github.com/xxg3053/xxx.git`下载下来的项目 就不需要 `git remote add origin https://xxxxx`

****************
## git的密码
在项目界面按`t`进入查找界面 `ESC`退出

在项目的`setting`里面删除项目

`git branch -a  ` 查看远程分支

`git branch` 查看本地分支

`git branch xxxx` 创建分支

`git checkout secondBranch` 切换到secondBranch分支

`git branch -d xxxxx` 删除本地分支

`git branch xxxx` 创建分支

`git push origin gh-pages:gh-pages`  提交本地gh-pages分支作为远程的gh-pages分支
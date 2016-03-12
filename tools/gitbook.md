# gitBook

GitBook 是一个基于 Node.js 的命令行工具，可使用 Github/Git 和 Markdown 来制作精美的电子书

#### gitbook的安装

    npm install -g gitbook-cli
    gitbook -V

#### 使用README.md与SUMMARY.md编写

SUMMARY.md编写如下：

    * [简介](README.md)
    * [第一章](chapter1/README.md)
     - [第一节](chapter1/section1.md)
     - [第二节](chapter1/section2.md)
    * [第二章](chapter2/README.md)
     - [第一节](chapter2/section1.md)
     - [第二节](chapter2/section2.md)
    * [结束](end/README.md)

#### 基本命令
    gitbook init
    gitbook serve .
    gitbook build --output=/tmp/gitbook


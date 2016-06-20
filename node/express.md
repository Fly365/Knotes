# node express

[API](http://www.expressjs.com.cn/)

#### 基本安装方式
* `npm install -g express` *安装*
* `express nodeExpressProject` *创建express项目*
* `npm install ` *安装相关的库*
* `npm install jade` *安装jade渲染模型*
*  修改app.js的启动端口
* `node app.js` *启动项目*
* [API](http://www.expressjs.com.cn/)

#### 官方安装方式
* $ mkdir nodeExpressProject
* 创建一个 _package.json_ 文件
>		{
		  "name": "hello-world",
		  "description": "hello world test app",
		  "version": "0.0.1",
		  "private": true,
		  "dependencies": {
		    "express": "4.x"
		  }
		}

* `npm info express version ` *获取 Express 的最新版本*
* `npm install` *安装express安装依赖*
* `npm ls` *查看相关依赖*
* `$ npm install jade --save` 

#### Options

 * -h, --help          输出帮助信息
 * -V, --version       输出版本号
 * -e, --ejs           添加 ejs 模板引擎支持 (默认为jade)
 * -H, --hogan         添加 hogan.js模板引擎支持
 * -c, --css <engine>  添加样式 <引擎> 支持 (ess|stylus|compass) (默认为css)
 *     -f, --force         强制在非空目录执行
 * -f, --force         强制在非空目录执行


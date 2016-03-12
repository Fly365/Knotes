# nodejs

## npm 

* 通过 config 配置指向国内镜像源 (临时)
`npm config set registry http://registry.cnpmjs.org `//配置指向源
`npm info express`  //下载安装第三方包

* 通过 npm 命令指定下载源  (临时)
`npm --registry http://registry.cnpmjs.org info express`

* 在配置文件 ~/.npmrc 文件写入源地址 (永久)
`nano ~/.npmrc `  //打开配置文件
`registry =https://registry.npm.taobao.org `  //写入配置文件

* 更新npm库
`npm update -g`

* 更新Nodejs自身
`npm install -g n`
`n latest`

## 模块的流程

1. 创建模块		teacher.js
2. 导出模块		exports.add = function(){}
3. 加载模块		var teacher = require('./teacher.js')
4. 使用模块		teacher.add('Scott')

## URL

+ url 统一资源定位符  eg:网址
+ uri 统一资源标示符  eg：特定格式的字符串，url是uri的子集

`url.parse('http://localhost:9999/aa/aa',true,true)`

## querystring

`querystring.stringify('quer=aa&back=bb')`
`querystring.escape('哈哈')`

## HTTP

+ DNS查询
+ http三次握手
+ http会话

##### 问题

* 什么是回调？
	* 异步编程的基本方法
	* 
* 什么是同步/异步？
	* 浏览器中的js是单线程同步执行
	* 异步 setTimeout()
* 什么是I/O？
* 什么是单线程/多线程？
* 什么是阻塞/非阻塞？
* 什么是事件？
* 什么是事件驱动？
* 什么是基于事件驱动的回调？
* 什么是事件循环？

## nodejs实战

### 开发框架介绍  moviePro

## ubuntu 安装
	# apt-get update  
	# apt-get install -y python-software-properties software-properties-common  
	# add-apt-repository ppa:chris-lea/node.js  
	# apt-get update  
	# apt-get install nodejs 







[TOC]

# Hybrid App

Mobile App分为三大类：Native App,Hybrid App,Web App。其中Hybrid App介于Native App和Web App之间，它能兼顾Native App的良好用户体验及强大的功能并具有Web App跨平台快速开发的优势。缺点在于依赖于各平台的WebView，WebView的性能好坏直接决定了Hybrid App的性能。

>	KendoUI 2013年面向开发者做了一次有关的Hybrid调查，并将结果整理成了报告The HTML5 vs. Native Debate is Over and the Winner is...[^nativeDebate]，下面来看报告中几个关键的结论：

>	1. 在受访的2309个Mobile开发者中，到2013年8月为止完全使用Native开发的只有8%，而剩余的92%都可以被认为使用的是Hybrid

[^nativeDebate]:[KendoUI 2013年调查报告](http://www.telerik.com/support/kendo-ui)

## 相关技术

1.less/sass：css的预处理器。
2.bower[^bowerAPI]：管理依赖的JS库。
3.grunt[^gruntAPI]：作为项目打包工具。
4.[nodejs](#nodejs)
5.[Cordova](#cordova)
6.[AngularJS](#angularjs)
7.[SQLite](#sqlite)

[^bowerAPI]: [Bower](http://bower.io/)
[^gruntAPI]: [Grunt](http://www.gulpjs.com.cn/)

## nodejs

>	JavaScript是一种运行在浏览器的脚本，它简单，轻巧，易于编辑，这种脚本通常用于浏览器的前端编程，但是一位开发者Ryan有一天发现这种前端式的脚本语言可以运行在服务器上的时候，一场席卷全球的风暴就开始了。
Node.js是一个基于Chrome JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。Node.js 使用事件驱动， 非阻塞I/O 模型而得以轻量和高效，非常适合在分布式设备上运行的数据密集型的实时应用。
V8引擎执行Javascript的速度非常快，性能非常好。
Node是一个Javascript运行环境(runtime)。实际上它是对Google V8引擎进行了封装。V8引 擎执行Javascript的速度非常快，性能非常好。Node对一些特殊用例进行了优化，提供了替代的API，使得V8在非浏览器环境下运行得更好。

#### 安装

下载：[http://nodejs.org/download/](http://nodejs.org/download/) 安装

## npm

>	npm是node的包管理器，我们在开发nodejs应用程序的过程中，可能需要依赖许许多多的第三方模块以提高开发效率，那么此时，我们就需要npm来辅助安装所需package。

## Cordova 

*(原来名字：PhoneGap)*
>	PhoneGap是一个用基于HTML，CSS和JavaScript的，创建移动跨平台移动应用程序的快速开发平台。它使开发者能够利用iPhone，Android，Palm，Symbian,WP7,WP8,Bada和Blackberry智能手机的核心功能——包括地理定位，加速器，联系人，声音和振动等，此外PhoneGap拥有丰富的插件，可以调用。业界很多主流的移动开发框架均源于PhoneGap。较著名的有Worklight、appMobi、WeX5等

#### 优缺点


时下流行的移动Web应用可分为三种：原生应用、Web应用和混合型应用（*引用* [^yqd]）。

[^yqd]:[移动web优缺点](http://express.ruanko.com/ruanko-express_74/technologyexchange6.html)

1. 原生应用：通过各种应用市场安装，采用平台特定语言开发。
2. Web应用：通过浏览器访问，采用Web技术开发。
3. 混合型应用：通过各种应用市场安装，但采用Web技术开发。它虽然看上去是一个原生应用，但里面访问的实际上是一个Web应用。

原生应用的优势：

* 提供最佳的用户体验、最优质的用户界面和最华丽的交互；
* 针对不同平台提供不同体验；
* 可节省带宽成本；
* 可访问本地资源；
* 盈利模式明朗。

原生应用的劣势：

* 移植到不同平台上比较麻烦；
* 维护多个版本的成本比较高；
* 需要通过store或market确认；
* 盈利需要与第三方分成。

Web应用的优势如下：

* 开发成本低；
* 适配多种移动设备的成本低；
* 跨平台和终端；
* 迭代更新容易；
* 无需安装成本。

Web应用的劣势如下：

* 浏览体验短期内还无法超越原生应用；
* 不支持离线模式（HTML5将会解决这个问题）；
* 消息推送不够及时；
* 调用本地文件系统的能力弱。

混合型应用可以说是为了弥补上面两种应用开发模式的缺陷而生，
它是两者混合的产物，并且尽可能继承了双方的优势:

* 它可以让众多Web开发人员几乎零成本地转型成移动应用开发者。
* 相同的代码只需针对不同平台进行编译就能实现在多平台的分发，大大提高了多平台开发的效率。而相较于Web应用，开发者可以通过包装好的接口调用大部分常用的系统API。

_Cordova正是混合型框架中的佼佼者，它基于标准的Web技术——HTML、JavaScript和CSS，用JavaScript包装平台的API供开发者调用，具备强大的编译工具来为不同平台生成应用，同时拥有丰富的第三方资源和产业链。
PhoneGap在Web应用和设备之间搭建了一个通信的桥梁，封装了移动设备的平台差异，统一使用JavaScript接口访问设备本地API，以此提供了一个优秀的跨平台解决方案_


#### 安装

`npm install -g cordova` *安装*

#### 插件

`cordova plugin ls` *列出所有插件*
`cordova plugin add https://XXX.git` *git方式安装插件*
`cordova plugin add com.brodysoft.sqliteplugin` *从插件库 [^cordovaPlugin]安装sqlite插件*

[^cordovaPlugin]:[Cordova Plugin Registry](http://plugins.cordova.io/npm/index.html)

#### 学习

* [API](http://docs.phonegap.com/zh/edge/index.html)

## AngularJS

>	AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，最为核心的是：MVVM、模块化、自动化双向数据绑定、语义化标签、依赖注入、等等。

#### 特点

1. MVC
2. 模块化与依赖注入
3. 双向数据绑定
4. 指令与 UI 控件

#### 学习

* [API](http://docs.angularjs.cn/api/)
* [学习资料](https://github.com/jmcunningham/AngularJS-Learning/blob/master/ZH-CN.md) 
* [目录结构设计](http://trochette.github.io/Angular-Design-Patterns-Best-Practices/#/intro)
* [广告贴](https://ruby-china.org/topics/24111?page=2#replies)


## ionic

>	Ionic 是一个强大的 HTML5 应用程序开发框架，号称 Advanced HTML5 Hybrid Mobile AppFramework 是 AngularJS 移动端解决方案 可以帮助您使用 Web 技术，比如 HTML、 CSS 和Javascript 构建接近原生体验的移动应用程序。 Ionic 主要关注外观和体验，以及和你的应用程序的 UI 交互，特别适合用于基于 Hybird 模式的 HTML5 移动应用程序开发。
Ionic 是一个轻量的手机 UI 库，具有速度快，界面现代化、美观等特点。为了解决其他一些UI 库在手机上运行缓慢的问题。

#### 基本命令

`npm install -g cordova`      *安装phonegap 科尔多瓦*
`npm install -g ionic`        *安装ionic*
`ionic start myApp tabs` 	  *创建一个myApp的项目，使用tabs模板*
`cd myApp`
`ionic platform add android`  *添加android平台*
`ionic build android`         *编译 ，需要安装对应的android sdk，条件如下：*
	
	* SDK platform for android-22
	* Android SDK Platform-tools
	* Android SDK Build-tools

`ionic emulate android`       *启动android 虚拟机*
`adb devices` 				  *查看连接的设备*
`ionic run android` 		  *连接手机打开*
`ionic serve` 				  *使用浏览器打开*

#### 学习

* [API](http://www.ionic.wang/)
* [视频资料](http://www.ionic.wang/course-index.html)

## SQLite 

*(localStorage有5M的限制)*
>	SQLite 是一个开源的嵌入式关系数据库，实现自包容、零配置、支持事务的SQL数据库引擎。 其特点是高度便携、使用方便、结构紧凑、高效、可靠。 与其他数据库管理系统不同，SQLite 的安装和运行非常简单，在大多数情况下 - 只要确保SQLite的二进制文件存在即可开始创建、连接和使用数据库。如果您正在寻找一个嵌入式数据库项目或解决方案，SQLite是绝对值得考虑

## 移动WebApp开发框架对比

#### Sencha Touch
*原来的EXTjs*

* 优点
	* 用户体验最接近Native App， 具有整体的UI组件、布局解决方案；
	* 统一的编程代码结构和要求，良好组织的代码易于维护；
	* 继承ExtJS 4的应用程序MVC架构；
	* 完善的API文档，示例；活跃的社区，网上有大量的文档书籍帮助学习.
* 缺点
	* 兼容性差，仅支持webkit内核的浏览器；
	* 框架比较重量级，学习成本比较高；
	* 商业化使用有版权问题

#### jQuery Mobile

* 优点
	* 跨浏览器兼容性最好，几乎兼容所有的平台和浏览器；
	* 入门简单，语法简洁，编码灵活，一些简单的应用直接用HTML既可实现，无需Javascript；
	* 开源插件与第三方扩展网上资源丰富； 
	* 完善的API文档，示例；活跃的社区，网上有大量的文档书籍帮助学习；
* 缺点
	* jQuery Mobile对代码没有特定的要求，后期维护难度较大；

#### Dojo Mobile

* 优点
	* Dojo本身有很多优秀的设计，面向对象、MVC、JS模块化加载；
	* 完善的API文档，示例；活跃的社区，网上有大量的文档书籍帮助学习；
* 缺点
	* Dojo Mobile需要依赖完整的dojo库，压缩之后的代码140k，gzip压缩之后在40k；
	* 兼容性差，仅支持webkit内核的浏览器；
	* 学习成本高；


#### Jqmobi（Intel's App Framework）

* 优点
	* 使用简单
	* 与Sencha非常相似的一个框架;
* 缺点
	* 兼容性相比Sencha Touch稍好一点，但是也不支持WP IE、Firefox、Opera；

#### Ionic

* 优点：
	* 基于红的发紫AngularJs
	* 漂亮的UI
	* 强大的命令行(基于更热门的nodejs)
* 缺点：
	* 需要了解angularjs、Cordova等入手难度大

#### GMU 

* 好像挂掉了

#### React-Native

**facebook开源的移动开发框架**

	能解决大部分ui性能问题
	最值得期待的移动app解决方案
	
[教程](http://wiki.jikexueyuan.com/project/react-native/)

#### 其他

* Ratchet 
* Framework7
* MUI
* ....

## Ionic Coding

*部分代码展示*

#### 目录结构

	Project
	├── hooks
	├── platforms
	├── plugins
	├── resources
	├── scss
	├── www         	前端代码
	│    ├── css    	样式
	│    ├── html   	模板
	│    ├── img    	图片
	│    ├── js          js
	│    ├── lib		ionic库，不需要修改
	│    ├── index.html  主页
	├── .bowerrc
	├── .gitignore
	├── bower.json
	├── config.xml
	├── gulpfile.js
	├── ionic.project
	├── package.json


#### index.html
>		<!DOCTYPE html>
		<html>
		  <head>
		    <meta charset="utf-8">
		    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
		    <title></title>
		    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
		    <link href="css/style.css" rel="stylesheet">
		    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above
		    <link href="css/ionic.app.css" rel="stylesheet">
		    -->
		    <!-- ionic/angularjs js -->
		    <script src="lib/ionic/js/ionic.bundle.js"></script>
		    <script src="js/ng-cordova.js"></script>
		    <!-- cordova script (this will be a 404 during development) -->
		    <script src="cordova.js"></script>
		    <!-- your app's js -->
		    <script src="js/app.js"></script>
		  </head>
		  <body ng-app="starter">
		  <ion-nav-bar class="bar-balanced">
		      <ion-nav-back-button>
		      </ion-nav-back-button>
		    </ion-nav-bar>
		  <ion-nav-view> </ion-nav-view>
		  </body>
		</html>

#### app.js

###### 模块定义
>		angular.module('starter', ['ionic', 'ngCordova'])
		.run(function($ionicPlatform,$cordovaSQLite) {
		  $ionicPlatform.ready(function() {
		    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		    // for form inputs)
		    if(window.cordova && window.cordova.plugins.Keyboard) {
		      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		    }
		    if(window.StatusBar) {
		      StatusBar.styleDefault();
		    }
		    db = $cordovaSQLite.openDB("my.db");
		    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
		  });
		})

###### 路由定义
>		.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
		    $stateProvider
		    //abstract
		    .state('menus', {
		        url:'/menus',
		        abstract: true,
		        templateUrl: 'html/menus.html'
		    })

###### 控制器定义
>		.controller("dbCtrl", function($scope, $cordovaSQLite,$ionicLoading,$timeout) {
		    $scope.people = {
		        firstname:'first',
		        lastname:'last'
		    }
		    $scope.peoples = [];
		    $scope.myNotice = function(msg, timeout){
		        $ionicLoading.show({template:msg});
		        $timeout(function(){$ionicLoading.hide();}, timeout || 1000);
		        return false;
		    }

####  





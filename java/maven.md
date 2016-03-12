# Maven
Maven是基于项目对象模型（POM)，可以通过一小段描述信息来管理项目的构建、报告和文档的软件项目管理工具

* [中央仓库](http://search.maven.org/)
* [镜像仓库](http://mvnrepository.com/)

* [视频](http://www.imooc.com/learn/443)

## 目录结构

	src
		-main
			-java
				-package
		-test
			-java
				-package
		-resources

## pom.xml  （项目根目录）
pom.xml 是maven重要组成部分

	<modelVersion> maven 版本
	<groupId> 反写公司网址+项目名
	<artifactId> 项目名+模块名
	<version> 项目版本 
	<dependencies> 依赖
		<dependency>
		   <groupId>junit</groupId>
		   <artifactId>junit</artifactId>
		   <version>4.10</version>
		</dependency>

* name 项目描述名
* url 项目地址
* description 项目描述
* developers 开发人员列表
* licenses 许可证信息
* organization 组织信息
* dependencies 依赖列表
	* dependency 依赖项
* scope 依赖范围 eg:test 只在测试中用
* optional 这是以依赖是否可选，默认false
* exclusions 排除依赖传递列表
	* exclusion 排除依赖项
* dependencyManagerment 父类中使用，类似接口
* build 构建
	* plugins 插件列表
		* plugin 
* parent 用于子模块中对父模块的集成
* modules 

### 版本
**1.0.0**
第一个0是大版本号 第二个0是分支版本号，第三个0表示小版本号 

* snapshot 	快照；
* alpha	内部测试；
* beta	公测；
* release	稳定；
* GA	正式发布

## 命令

	`mvn -v`
	`cd 项目目录`
	`mvn compile`  编译
	`mvn test` 	   执行测试
	`mvn package`  打包
	`mvn clean`    删除target
	`mvn install`  安装jar包到本地仓库

	`mvn archetype:generate ` 使用 archetype 插件创建基本项目目录

## 本地仓库
conf/setting.xml 里面的localrepo...

## eclipse
jdk里面的jre
eclipse运行在独立的jre上
两套jre的区别：？

Preferences -> Maven -> Installations 指向安装好的maven
Preferences -> Maven -> User Settings 设置settiings.xml

## 生命周期
完整的项目构建过程：
	**清理、编译、测试、打包、集成测试、验证、部署**

* clean  
* compile
* test
* package
* install
* site 生成项目站点
	* pre-site 生成站点前的工作
	* site 生成项目站点文档
	* post-site 生成项目站点后完成的工作
	* site-deploy 发布生成的站点到服务器上

### 插件
在pom.xml中添加：
`<plugins></plugins>`

## WEB项目
1. new -> maven -> webapp
2. add package src.main.java src.test.java
3. build path -> source -> output folder
4. project -> properties -> Project Facets -> Dynamic Web Module + java
5. properyies -> Deployment Assembly :
	1. 删除test发布
	2. src/main/java -> WEB-INF/Classes
	
2. bulid path -> 
plugin jetty || plugin tomcat

### code

	<plugins>
		<plugin>
			<groupId>org.eclipse.jetty</groupId>
			<artifactId>jetty-server</artifactId>
			<version>9.3.2.v20150730</version>
			<executions>
				<execution>
					<!--在打包成功后使用jetty:run来运行jetty服务-->
					<phase>package</phase>
					<goals>
						<goal>run</goal>
					</goals>
				</execution>
			</executions>
		</plugin>
	</plugins>

### 部署:
* run as maven bulid
* clean package 

## 总结

* maven下载和环境搭建
* maven目录骨架说明
* 常用的maven命令
* 仓库和坐标
* 在eclipse安装和创建maven项目
* 生命周期、pom.xml以及依赖、集合、继承
* eclipse中常见web项目和jetty插件安装




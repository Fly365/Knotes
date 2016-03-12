# swagger
swagger 是一个可视化RESTful WebService的工具。

	使用swagger editor编写doc，使用swagger ui在线查看

## swagger ui

[github](https://github.com/swagger-api/swagger-ui)


## swagger editor

#### 在线编辑器

[地址](http://editor.swagger.io/#/)

#### 本地安装

	git clone https://github.com/swagger-api/swagger-editor.git
	cd swagger-editor
	npm start

## 集成springmvc
* 通过maven下载相关jar
* 注解配置
* 访问{projectName}/api-docs路径
* [github](https://github.com/swagger-api/swagger-codegen/tree/master/samples/server/petstore/spring-mvc)

### java 注解

1. 编写配置类 

[教程](http://www.mamicode.com/info-detail-525592.html)

	@Configuration 配置注解，自动在本类上下文加载一些环境变量信息
	@EnableWebMvc 
	@EnableSwagger 使swagger生效
	@ComponentScan("com.kenfo.packages") 需要扫描的包路径



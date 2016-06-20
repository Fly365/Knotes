# Servlet
[视频](http://www.imooc.com/learn/269)

**服务器端运行的小程序，一个servlet就是一个java类，请求-响应模式**

Tomcat容器等级

## 步骤
1. 继承 HttpServlet （实现了http协议的servlet）
2. 重写 doGet()、doPost()方法
3. 在web.xml中注册Servlet

### 注册

	<servlet>
	  	<servlet-name>Hello</servlet-name>
	  	<servlet-class>servlet.Hello</servlet-class>
	 </servlet>
	 <servlet-mapping>
	  	<servlet-name>Hello</servlet-name>
	  	<url-pattern>/servlet/Hello</url-pattern>
	 </servlet-mapping>

## 执行流程 & 生命周期

1. 调用init 初始化，只被调用一次，是单例的
2. 调用service方式，选项get/post方法
3. 销毁 destroy()

## tomcat装载servlet的方法
1. 自动，在web.xml的配置<loadon-startup>1</loadon-startup>
2. 请求之后装载

## servlet与jsp内置对象对应关系

1. out          resp.getWriter()
2. request      service方法中的req参数
3. response     service方法中的resp参数
4. session      req.getSession()
5. application  getServletContext()
6. exception    Throwable
7. page         this
8. pageContext  PageContext
9. Config       getServletConfig()函数



# apache

下载好apache安装文件后，点击安装，在连续3次next后，将进入server information配置界面，要求输入network domain、server domain和网站管理员的邮箱地址，普通用户可以随便按照格式填一下就行了。再次按Next后，出现选择安装路径的界面，默认的路径比较长，飘易建议把安装路径修改为：“C:\apache\”，继续安装，直到完成。 
 安装完毕，apache就自动启动，可以测试apache是否成功启动。在浏览器地址栏里输入：http://localhost/或http://127.0.0.1，如果出现“It works.”，那么恭喜你，apache已经成功安装了；同时在电脑右下角的任务栏里有一个绿色的apache服务器运行图标。 
apache还有一个配置文件：httpd:conf 需要配置，以便php运行。位置为：C:/apache/conf 目录里。打开httpd:conf： 
  
1.查找“DocumentRoot”，这里是指定主页放置的目录。默认是：“C:/Apache/htdocs”，你可以使用默认的目录，也可以自己定义一个，如：“D:/PHP”。注意：目录末尾不要加“/”。 
2.查找“DirectoryIndex”，这里是默认首页文件名，可以在index.html 的后面加入index.php等。每种类型之间都要留一个空格（DirectoryIndex index.php这里的index.php是自己做网站的首文件，如果首文件是test.php就要改为DirectoryIndex test.php）。 
3.查找 

>   Options FollowSymLinks 
    AllowOverride None 
    Order deny,allow 
    Deny from all 

修改为： 

>   Options FollowSymLinks 
    AllowOverride None 
    Order deny,allow 
    allow from all 

如果不改这里的话，可能会出现 You don't have permission to access / on this server. 这样的错误提示，尤其在改变了默认主页的路径后。 
注意：每次修改httpd:conf文件后，都要重启apache服务器。另外，如果你的win32系统上同时也运行iis服务器，那么就要先停止iis服务器的运行，然后再启动apache，否则apache服务器无法启动。


## 安装
下载压缩包
`httpd -k install` *安装服务*
`httpd -k start` *启动服务*

## 删除win服务

`sc delete Apache2.2` 

## 常见问题

* 403 
>	<Directory "D:/documents/ws">

* 


## ubuntu 下安装
`apt-get install apache2`
apache的默认文档根目录是在ubuntu上的/var/www目录 ,配置文件是/ etc/apache2/apache2.conf。配置存储在的子目录在/etc/apache2目录。


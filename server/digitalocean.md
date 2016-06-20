# 初始配置

## 安装apache

`sudo apt-get install apache2`

## 安装mysql
`sudo apt-get install mysql-server`  xxg111063053
`sudo apt-get install php5-mysql`
`sudo apt-get install php5-gd`

`sudo nano /etc/mysql/my.cnf`

	将其中的"bind-address=127.0.0.1"注释掉即可
`sudo /etc/init.d/mysql restart`  

## 安装php
`sudo apt-get install php5 libapache2-mod-php5`
`sudo /etc/init.d/apache2 restart`
`sudo nano /var/www/helloworld.php`  *<?php phpinfo();?>*  mv命令改名


#### 安装路径
	
	apache配置文件:/etc/httpd/conf/httpd.conf
	Apache模块路径：/usr/sbin/apachectl
	web目录:/var/www/htm

	php的配置文件:/etc/php5/apache2/php.ini


## 安装nodejs

`apt-get install nodejs`






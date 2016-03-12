# [Mysql 开发技巧](http://www.imooc.com/learn/427)

## 安装

* ubuntu 下 `apt-get install mysql-server mysql-client`

* 环境变量 
  将bin目录添加到path中

* 修改配置文件my-default.ini

>	[mysqld]
	basedir=C:\Program Files\MySQL\MySQL Server 5.6（mysql所在目录） 
	datadir=C:\Program Files\MySQL\MySQL Server 5.6\data （mysql所在目录\data）

* 设置服务
`mysqld -install`

* 启动服务
`net start mysql`

* 登录
`mysql -u root -p`

## 行列转换
1. `select a.user_name,kills from user1 a join user_kills b on a.id=b.user_id`
	 **带有姓名的杀怪记录表**
2. `select a.user_name,sum(kills) from user1 a join user_kills b on a.id=b.user_id group by a.user_name` **汇总**

3. 
>>		select * from (
			select sum(kills) as '沙僧' 
				from user1 a join user_kills b on a.id=b.user_id and a.user_name='沙僧') a 
			cross join (select sum(kills) as '孙悟空' 
			               from user1 a join user_kills b on a.id=b.user_id and a.user_name='孙悟空') b 
			         cross join (select sum(kills) as '唐僧' 
			         		from user1 a join user_kills b on a.id=b.user_id and a.user_name='唐僧') c
**行转列 cross join 笛卡尔积**

4. 
>>		select sum(case when user_name='孙悟空' then kills end) as '孙悟空' , 
					sum(case when user_name='八戒' then kills end) as '八戒', 
					sum(case when user_name='沙僧' then kills end) as '沙僧' 
				from user1 a join user_kills b on a.id=b.user_id ` 
**使用case 行转列**

## 列转行
1. `alter table user1 add column mobile varchar(100)` **新增一列**
2. [较复杂](http://www.imooc.com/video/8275)

## 远程登录

1. nano /etc/mysql/my.cnf找到bind-address = 127.0.0.1 注释掉
2. sudo /etc/init.d/mysql restart
3. grant all privileges on *.* to root@"%" identified by "password" with grant option;
4. flush privileges;
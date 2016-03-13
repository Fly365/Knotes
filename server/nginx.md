# Nginx

高性能高并发(10万以上，百万级并发量)，反向代理，负载均衡等特点

## Ubuntu 安裝

1. 使用命令安装 `$sudo apt-get install nginx`
2. 下载源码安装使用`./config make make install` 安装

## 基本目录
1. 使用命令安装的目录
    * 所有的配置文件都在/etc/nginx
    * 日志放在了/var/log/nginx
    * 配置/etc/nginx/sites-enabled/default
2. 使用源码安装
    + /usr/local/nginx/sbin 命令目录
    + /usr/local/nginx/conf 配置目录

## 启动与停止
window环境和Linux环境有所不同

##### window环境

    start nginx     //启动
    nginx -s stop   //停止
    nginx -s reload //重启

##### Linux环境
*pid为nginx的master进程(ps -ef|grep nginx)*

1. 启动
 + /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf     //启动
 + /usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf     //测试配置文件是否正确
2. 停止 
 + kill -QUIT pid  //从容停止 
 + kill -TERM pid  //快速停止 
 + kill -INT pid   //快速停止
 + pkill -g nginx  //强制停止
3. 重启
 + 第一种方法
  * cd /usr/local/nginx/sbin
  * ./nginx -s reload //重启
 + 第二种方法
  * kill -HUP pid

### 信号控制

* HUP:重启
* QUIT:从容关闭
* TERM:快速关闭
* INT:从容关闭
* USR1:切换日志文件
* USR2:平滑升级可执行文件
* WINCH:从容关闭工作进程

### nginx.conf配置文件

工作衍生进程数 通常代表cpu的核数，或者核数的两倍  
worker_processes  1;  
设置最大连接数  
events {  
    worker_connections  1024;  
}  
http {
    server { }  
    server { }  
} 



